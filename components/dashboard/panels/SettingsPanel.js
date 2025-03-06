"use client";

import { useState } from "react";

export default function SettingsPanel() {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        weeklyReport: false,
        soundEffects: true,
        focusDuration: 25,
        shortBreak: 5,
        longBreak: 15,
        theme: "system",
    });

    const handleToggle = (setting) => {
        setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings((prev) => ({ ...prev, [name]: parseInt(value, 10) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated settings to your API
        alert("Settings update functionality to be implemented");
    };

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">App Settings</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                    {/* Notification Settings */}
                    <div className="bg-white rounded-lg p-6 border border-gray-300">
                        <h3 className="text-xl font-bold mb-4">Notifications</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">App Notifications</h4>
                                    <p className="text-sm text-gray-600">Receive in-app notifications</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("notifications")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.notifications ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.notifications ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Weekly Reports</h4>
                                    <p className="text-sm text-gray-600">Get productivity summaries</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("weeklyReport")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.weeklyReport ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.weeklyReport ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Display Settings */}
                    <div className="bg-white rounded-lg p-6 border border-gray-300">
                        <h3 className="text-xl font-bold mb-4">Display</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Dark Mode</h4>
                                    <p className="text-sm text-gray-600">Use dark theme</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("darkMode")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.darkMode ? "bg-blue-600" : "bg-white border border-gray-300"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.darkMode ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Sound Effects</h4>
                                    <p className="text-sm text-gray-600">Play sounds for notifications</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("soundEffects")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.soundEffects ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.soundEffects ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Timer Settings */}
                    <div className="bg-white rounded-lg p-6 border border-gray-300">
                        <h3 className="text-xl font-bold mb-4">Timer Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="focusDuration">Focus Duration (minutes)</label>
                                <input
                                    type="number"
                                    id="focusDuration"
                                    name="focusDuration"
                                    min="1"
                                    max="60"
                                    value={settings.focusDuration}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-transparent border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="shortBreak">Short Break Duration (minutes)</label>
                                <input
                                    type="number"
                                    id="shortBreak"
                                    name="shortBreak"
                                    min="1"
                                    max="30"
                                    value={settings.shortBreak}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-transparent border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="longBreak">Long Break Duration (minutes)</label>
                                <input
                                    type="number"
                                    id="longBreak"
                                    name="longBreak"
                                    min="1"
                                    max="60"
                                    value={settings.longBreak}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-transparent border-gray-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
                        >
                            Save Settings
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
} 