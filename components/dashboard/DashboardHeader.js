"use client";

import { useState, useEffect } from "react";
import { useDashboardTheme } from "@/providers/DashboardThemeProvider";

export default function DashboardHeader({ user, onSignOut }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const { theme, setTheme } = useDashboardTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure theme component doesn't render until mounted on client
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClickOutside = (e) => {
        if (isProfileOpen && !e.target.closest('.profile-dropdown')) {
            setIsProfileOpen(false);
        }
        if (isNotificationsOpen && !e.target.closest('.notifications-dropdown')) {
            setIsNotificationsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isProfileOpen, isNotificationsOpen]);

    return (
        <header className="bg-neutral-800 border-b border-neutral-700 p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Dashboard</h1>

                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <div className="relative notifications-dropdown">
                        <button
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="relative p-2 rounded-full hover:bg-neutral-700 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"></span>
                        </button>

                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-50">
                                <div className="p-3 border-b border-neutral-700">
                                    <h3 className="font-medium">Notifications</h3>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-neutral-400 text-center">No notifications yet.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Profile */}
                    <div className="relative profile-dropdown">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 p-2 rounded-full hover:bg-neutral-700 transition-colors"
                        >
                            <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center font-medium">
                                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                            </div>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-60 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-50">
                                <div className="p-3 border-b border-neutral-700">
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-sm text-neutral-400">{user.email}</p>
                                </div>

                                {mounted && (
                                    <div className="p-3 border-b border-neutral-700">
                                        <p className="text-sm font-medium mb-2">Theme</p>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => setTheme("light")}
                                                className={`p-2 rounded-md theme-toggle-button ${theme === "light" ? "bg-primary text-white" : "bg-neutral-700 hover:bg-neutral-600"}`}
                                                aria-label="Light theme"
                                                data-tooltip="Enable light theme"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => setTheme("dark")}
                                                className={`p-2 rounded-md theme-toggle-button ${theme === "dark" ? "bg-primary text-white" : "bg-neutral-700 hover:bg-neutral-600"}`}
                                                aria-label="Dark theme"
                                                data-tooltip="Enable dark theme"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => setTheme("system")}
                                                className={`p-2 rounded-md theme-toggle-button ${theme === "system" ? "bg-primary text-white" : "bg-neutral-700 hover:bg-neutral-600"}`}
                                                aria-label="System theme"
                                                data-tooltip="Enable system theme"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="p-3">
                                    <button
                                        onClick={onSignOut}
                                        className="w-full text-left text-red-500 hover:text-red-400"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
} 