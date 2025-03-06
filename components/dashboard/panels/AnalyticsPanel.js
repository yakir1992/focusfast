"use client";

export default function AnalyticsPanel({ user }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Focus Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-neutral-400 text-sm font-medium mb-2">Total Focus Time</h3>
                    <p className="text-2xl font-bold">0 hours</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-neutral-400 text-sm font-medium mb-2">Focus Sessions</h3>
                    <p className="text-2xl font-bold">0</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-neutral-400 text-sm font-medium mb-2">Productivity Score</h3>
                    <p className="text-2xl font-bold">0%</p>
                </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 mb-8">
                <h3 className="text-xl font-bold mb-4">Focus Trends</h3>
                <div className="text-neutral-400 text-center py-16">
                    <p>No data available yet. Complete focus sessions to see your trends.</p>
                </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                <h3 className="text-xl font-bold mb-4">Productivity Insights</h3>
                <div className="text-neutral-400 text-center py-8">
                    <p>Complete more focus sessions to unlock personalized insights.</p>
                </div>
            </div>
        </div>
    );
} 