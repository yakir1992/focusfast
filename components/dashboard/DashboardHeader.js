"use client";

import { useState } from "react";

export default function DashboardHeader({ user, onSignOut }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="bg-neutral-800 border-b border-neutral-700 p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Dashboard</h1>

                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center space-x-2 focus:outline-none"
                    >
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            {user.name?.charAt(0) || "U"}
                        </div>
                        <span>{user.name || user.email}</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg z-10">
                            <div className="py-1">
                                <p className="px-4 py-2 text-sm text-neutral-300 border-b border-neutral-700">
                                    Signed in as <span className="font-medium">{user.email}</span>
                                </p>
                                <button
                                    onClick={() => onSignOut()}
                                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-neutral-700"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
} 