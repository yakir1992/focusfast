"use client";

export default function FocusPanel({ user }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Focus Sessions</h2>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 mb-8">
                <h3 className="text-xl font-bold mb-4">Start a New Focus Session</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Session Duration</label>
                        <select className="w-full bg-neutral-700 border border-neutral-600 rounded-md p-2">
                            <option>25 minutes (Pomodoro)</option>
                            <option>50 minutes (Extended)</option>
                            <option>90 minutes (Deep Work)</option>
                            <option>Custom...</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Focus Goal</label>
                        <input
                            type="text"
                            placeholder="What are you working on?"
                            className="w-full bg-neutral-700 border border-neutral-600 rounded-md p-2"
                        />
                    </div>
                </div>
                <button className="btn btn-primary">Start Focus Session</button>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                <h3 className="text-xl font-bold mb-4">Recent Sessions</h3>
                <div className="text-neutral-400 text-center py-8">
                    No focus sessions recorded yet. Start your first session above!
                </div>
            </div>
        </div>
    );
} 