"use client";

import { SessionProvider } from "next-auth/react";
import { DashboardThemeProvider } from "@/providers/DashboardThemeProvider";

export default function DashboardProviders({ children }) {
    return (
        <SessionProvider>
            <DashboardThemeProvider>{children}</DashboardThemeProvider>
        </SessionProvider>
    );
} 