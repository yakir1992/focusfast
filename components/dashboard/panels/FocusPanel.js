"use client";

import { useState } from "react";

export default function FocusPanel({ user }) {
    const [selectedPattern, setSelectedPattern] = useState("pomodoro");
    const [customDuration, setCustomDuration] = useState(25);
    const [isFlowMode, setIsFlowMode] = useState(false);
    const [selectedEnvironment, setSelectedEnvironment] = useState("office");

    const focusPatterns = [
        { id: "pomodoro", name: "Classic Pomodoro", duration: 25, description: "Traditional 25-minute focus sessions" },
        { id: "ultradian", name: "Ultradian Rhythm", duration: 90, description: "90-minute deep work based on natural brain cycles" },
        { id: "flowstate", name: "Flow State", duration: 50, description: "50-minute uninterrupted deep focus with neural entrainment" },
        { id: "custom", name: "Custom Duration", duration: customDuration, description: "Set your own session length" }
    ];

    const environments = [
        { id: "office", name: "Office Focus", sound: "ambient-office.mp3" },
        { id: "nature", name: "Nature Focus", sound: "forest-sounds.mp3" },
        { id: "cafe", name: "Café Focus", sound: "cafe-ambience.mp3" },
        { id: "deepwork", name: "Deep Work", sound: "neural-beats.mp3" },
    ];

    const handlePatternChange = (patternId) => {
        setSelectedPattern(patternId);
    };

    const handleStartSession = () => {
        // Here you would start the actual focus session
        alert(`Starting ${selectedPattern === "custom" ? customDuration : focusPatterns.find(p => p.id === selectedPattern).duration} minute focus session with ${environments.find(e => e.id === selectedEnvironment).name} environment`);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Focus Sessions</h2>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 mb-8">
                <h3 className="text-xl font-bold mb-4">Engineer Your Focus Session</h3>

                <div className="space-y-6">
                    {/* Focus Pattern Selection */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Focus Pattern</label>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            {focusPatterns.map((pattern) => (
                                <div
                                    key={pattern.id}
                                    className={`p-3 rounded-lg cursor-pointer border ${selectedPattern === pattern.id ? 'border-primary bg-primary/10' : 'border-neutral-600 hover:border-neutral-500'}`}
                                    onClick={() => handlePatternChange(pattern.id)}
                                >
                                    <div className="font-medium">{pattern.name}</div>
                                    <div className="text-xs text-neutral-400">{pattern.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Duration Slider */}
                    {selectedPattern === "custom" && (
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Custom Duration: {customDuration} minutes
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="120"
                                value={customDuration}
                                onChange={(e) => setCustomDuration(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    )}

                    {/* Focus Environment */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Focus Environment</label>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            {environments.map((env) => (
                                <div
                                    key={env.id}
                                    className={`p-3 rounded-lg cursor-pointer border ${selectedEnvironment === env.id ? 'border-primary bg-primary/10' : 'border-neutral-600 hover:border-neutral-500'}`}
                                    onClick={() => setSelectedEnvironment(env.id)}
                                >
                                    <div className="font-medium">{env.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advanced Options */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between p-3 border border-neutral-600 rounded-lg">
                            <div>
                                <div className="font-medium">Flow State Accelerator</div>
                                <div className="text-xs text-neutral-400">Binaural beats to reach flow state faster</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isFlowMode}
                                    onChange={() => setIsFlowMode(!isFlowMode)}
                                />
                                <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isFlowMode ? 'bg-primary' : 'bg-neutral-700'}`}></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-3 border border-neutral-600 rounded-lg">
                            <div>
                                <div className="font-medium">Distraction Shield</div>
                                <div className="text-xs text-neutral-400">Automatically block distracting apps and websites</div>
                            </div>
                            <button className="px-3 py-1 bg-neutral-700 rounded-md text-xs">Configure</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="What are you working on today?"
                            className="flex-1 p-3 bg-neutral-700 border border-neutral-600 rounded-lg"
                        />
                        <button
                            onClick={handleStartSession}
                            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Start Focus Session
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                <h3 className="text-xl font-bold mb-4">Focus History</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="font-medium">This Week</div>
                        <div className="text-neutral-400">0 hours total</div>
                    </div>

                    <div className="h-20 flex items-end gap-1">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={day} className="flex flex-col items-center flex-1">
                                <div className="w-full bg-neutral-700/50 rounded-sm" style={{ height: '8px' }}></div>
                                <div className="text-xs mt-2 text-neutral-500">{day}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-neutral-400 py-6">
                        <p>Start your first focus session to begin tracking your productivity!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}