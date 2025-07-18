"use client";

import { useState } from "react";

export default function AnalyticsPanel({ user }) {
    const [timeRange, setTimeRange] = useState("week");

    // Placeholder data for demonstration
    const focusFactors = [
        { name: "Time of Day", score: 72, recommendation: "Your peak focus hours appear to be 9-11 AM" },
        { name: "Session Duration", score: 58, recommendation: "Try shorter 50-minute sessions for better results" },
        { name: "Environment", score: 83, recommendation: "Your home office setup yields best results" },
        { name: "Break Frequency", score: 45, recommendation: "Taking more frequent short breaks could improve focus" },
        { name: "Context Switching", score: 35, recommendation: "You lose ~27 minutes daily to task switching" },
    ];

    const renderScoreBar = (score) => {
        const getColor = (s) => {
            if (s < 40) return 'bg-red-500';
            if (s < 70) return 'bg-yellow-500';
            return 'bg-green-500';
        };

        return (
            <div className="w-full bg-neutral-700 h-2 rounded-full">
                <div
                    className={`h-full rounded-full ${getColor(score)}`}
                    style={{ width: `${score}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Focus Analytics</h2>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Focus Intelligence</h3>
                    <div className="flex gap-2">
                        {["week", "month", "quarter", "year"].map((range) => (
                            <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={`px-3 py-1 text-sm rounded-md ${timeRange === range ? 'bg-primary text-white' : 'bg-neutral-700 hover:bg-neutral-600'}`}
                            >
                                {range.charAt(0).toUpperCase() + range.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                        <h4 className="text-neutral-400 text-sm font-medium mb-1">Focus Depth Score</h4>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold">0</span>
                            <span className="text-sm text-neutral-400 mb-1">/100</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">Based on your session consistency and duration</p>
                    </div>

                    <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                        <h4 className="text-neutral-400 text-sm font-medium mb-1">Flow State Achievement</h4>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold">0</span>
                            <span className="text-sm text-neutral-400 mb-1">times</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">Sessions where you maintained focus for 45+ min</p>
                    </div>

                    <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                        <h4 className="text-neutral-400 text-sm font-medium mb-1">Productivity Ratio</h4>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold">0:0</span>
                            <span className="text-sm text-neutral-400 mb-1">focus:break</span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">Your optimal ratio is typically 5:1</p>
                    </div>
                </div>

                <h4 className="font-medium mb-4">Your Focus Fingerprint™</h4>
                <div className="space-y-5 mb-8">
                    {focusFactors.map((factor) => (
                        <div key={factor.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>{factor.name}</span>
                                <span>{factor.score}/100</span>
                            </div>
                            {renderScoreBar(factor.score)}
                            <p className="text-xs text-primary">{factor.recommendation}</p>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-neutral-900 rounded-lg border border-primary/30">
                    <h4 className="font-medium text-primary mb-2">AI Focus Recommendation</h4>
                    <p className="text-sm">Complete your first focus session to receive personalized recommendations based on your unique work patterns.</p>
                </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                <h3 className="text-xl font-bold mb-4">Context Switching Cost</h3>
                <p className="text-sm text-neutral-400 mb-6">Tracking the productivity impact of task and context switching</p>

                <div className="text-center text-neutral-400 py-8">
                    <p>Start tracking your work to analyze context switching costs.</p>
                    <p className="text-xs mt-2 text-neutral-500">The average knowledge worker loses 23% of productive time to context switching</p>
                </div>

                <div className="mt-6 p-4 bg-neutral-900 rounded-lg">
                    <h4 className="font-medium mb-2">Focus Optimization Tips</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Group similar tasks to reduce mental context switching</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Schedule focus blocks of at least 90 minutes for deep work</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Use the Ultradian Rhythm pattern for tasks requiring creativity</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}