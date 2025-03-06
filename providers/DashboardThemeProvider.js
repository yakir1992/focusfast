"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DashboardThemeContext = createContext({
    theme: "system",
    setTheme: () => null,
});

export function DashboardThemeProvider({ children }) {
    const [theme, setTheme] = useState("system");
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on client side
    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("dashboardTheme") || "system";
        setTheme(storedTheme);

        // Apply theme only to dashboard container
        const dashboardElement = document.getElementById("dashboard-container");
        if (dashboardElement) {
            if (storedTheme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                dashboardElement.setAttribute("data-theme", systemTheme);
                dashboardElement.classList.toggle("dark", systemTheme === "dark");
            } else {
                dashboardElement.setAttribute("data-theme", storedTheme);
                dashboardElement.classList.toggle("dark", storedTheme === "dark");
            }
        }
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("dashboardTheme", newTheme);

        // Apply theme only to dashboard container
        const dashboardElement = document.getElementById("dashboard-container");
        if (dashboardElement) {
            if (newTheme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                dashboardElement.setAttribute("data-theme", systemTheme);
                dashboardElement.classList.toggle("dark", systemTheme === "dark");
            } else {
                dashboardElement.setAttribute("data-theme", newTheme);
                dashboardElement.classList.toggle("dark", newTheme === "dark");
            }
        }
    };

    return (
        <DashboardThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
            {children}
        </DashboardThemeContext.Provider>
    );
}

export const useDashboardTheme = () => useContext(DashboardThemeContext); 