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
        distractionBlocking: "moderate",
        flowAccelerator: true,
        focusMusic: "none",
        contextSwitchAlert: true,
        environmentAnalysis: false
    });

    const handleToggle = (setting) => {
        setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings((prev) => ({ ...prev, [name]: name.includes("Duration") || name.includes("Break") ? parseInt(value, 10) : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated settings to your API
        alert("Settings update functionality to be implemented");
    };

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Focus Settings</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                    {/* Focus Session Settings */}
                    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                        <h3 className="text-xl font-bold mb-4">Focus Engineering</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="focusDuration">Focus Duration (minutes)</label>
                                <input
                                    type="range"
                                    id="focusDuration"
                                    name="focusDuration"
                                    min="5"
                                    max="120"
                                    value={settings.focusDuration}
                                    onChange={handleChange}
                                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-neutral-400 mt-1">
                                    <span>5m</span>
                                    <span>25m</span>
                                    <span>50m</span>
                                    <span>90m</span>
                                    <span>120m</span>
                                </div>
                                <p className="text-xs text-neutral-400 mt-2">
                                    Current: {settings.focusDuration} minutes ({settings.focusDuration < 25 ? "Quick Focus" :
                                        settings.focusDuration < 50 ? "Standard Focus" :
                                            settings.focusDuration < 90 ? "Deep Focus" : "Flow State"})
                                </p>
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
                                    className="w-full p-2 border rounded bg-neutral-700 border-neutral-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="distractionBlocking">Distraction Blocking Level</label>
                                <select
                                    id="distractionBlocking"
                                    name="distractionBlocking"
                                    value={settings.distractionBlocking}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-neutral-700 border-neutral-600"
                                >
                                    <option value="off">Off</option>
                                    <option value="light">Light - Block social media only</option>
                                    <option value="moderate">Moderate - Block non-work websites</option>
                                    <option value="strict">Strict - Block all notifications & non-work apps</option>
                                    <option value="custom">Custom - Use my distraction list</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="focusMusic">Focus Environment</label>
                                <select
                                    id="focusMusic"
                                    name="focusMusic"
                                    value={settings.focusMusic}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded bg-neutral-700 border-neutral-600"
                                >
                                    <option value="none">None</option>
                                    <option value="neuralBeats">Neural Beats - Alpha waves for focus</option>
                                    <option value="whiteNoise">White Noise - Background noise blocking</option>
                                    <option value="lofi">Lo-Fi - Gentle background music</option>
                                    <option value="nature">Nature Sounds - Gentle environment</option>
                                    <option value="custom">Custom - Use my playlist</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Flow State Accelerator</h4>
                                    <p className="text-sm text-neutral-400">Use neural entrainment to reach flow state faster</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("flowAccelerator")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.flowAccelerator ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.flowAccelerator ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Context Switch Detection</h4>
                                    <p className="text-sm text-neutral-400">Alert when switching tasks too frequently</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("contextSwitchAlert")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.contextSwitchAlert ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.contextSwitchAlert ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Environment Analysis</h4>
                                    <p className="text-sm text-neutral-400">Analyze your workspace for optimal focus conditions</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("environmentAnalysis")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.environmentAnalysis ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.environmentAnalysis ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                        <h3 className="text-xl font-bold mb-4">Notifications</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">App Notifications</h4>
                                    <p className="text-sm text-neutral-400">Receive in-app notifications</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("notifications")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.notifications ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.notifications ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Weekly Focus Report</h4>
                                    <p className="text-sm text-neutral-400">Get your focus analytics summary</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("weeklyReport")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.weeklyReport ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.weeklyReport ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Sound Effects</h4>
                                    <p className="text-sm text-neutral-400">Play sounds for focus events</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("soundEffects")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.soundEffects ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.soundEffects ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Display Settings */}
                    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                        <h3 className="text-xl font-bold mb-4">Display</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium">Dark Mode</h4>
                                    <p className="text-sm text-neutral-400">Use dark theme (reduces eye strain)</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleToggle("darkMode")}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${settings.darkMode ? "bg-primary" : "bg-neutral-600"}`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.darkMode ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-700 text-white font-medium px-6 py-2 rounded-md"
                        >
                            Save Settings
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}