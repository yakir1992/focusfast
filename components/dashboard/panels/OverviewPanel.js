"use client";

export default function OverviewPanel({ user }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Welcome back, {user.name}!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Stats cards */}
                <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                    <h3 className="text-neutral-400 text-sm font-medium mb-2">Subscription Status</h3>
                    <p className="text-2xl font-bold">{user.isPro ? "Premium" : "Free"}</p>
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
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="text-neutral-400 text-center py-8">
                    No activity recorded yet. Start your focus journey today!
                </div>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                <h3 className="text-xl font-bold mb-4">Tips & Recommendations</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="mr-2 text-orange-500">➤</span>
                        <span>Complete your profile to personalize your experience</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-orange-500">➤</span>
                        <span>Set your first focus goal in the settings</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-orange-500">➤</span>
                        <span>Check out our premium features to boost your productivity</span>
                    </li>
                </ul>
            </div>
        </div>
    );
} 