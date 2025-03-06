"use client";

import { useState } from "react";

export default function BillingPanel({ user }) {
    const [selectedPlan, setSelectedPlan] = useState(user.isPro ? "pro" : "free");

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Billing & Subscription</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Current Plan</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-lg font-medium">{user.isPro ? "Premium Plan" : "Free Plan"}</p>
                        <p className="text-gray-400 mt-1">
                            {user.isPro
                                ? "You have access to all premium features"
                                : "Upgrade to unlock premium features"}
                        </p>
                    </div>
                    {!user.isPro && (
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                            Upgrade Now
                        </button>
                    )}
                </div>
            </div>
            <h3 className="text-xl font-semibold">Available Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Free Plan */}
                <div
                    className={`border rounded-lg p-6 cursor-pointer ${selectedPlan === "free"
                        ? "border-blue-500 bg-gray-700"
                        : "border-gray-700 hover:bg-gray-700"
                        }`}
                    onClick={() => setSelectedPlan("free")}
                >
                    <h4 className="text-lg font-bold">Free Plan</h4>
                    <p className="text-gray-400 mb-4">Basic productivity tracking</p>
                    <button
                        className={`w-full py-2 rounded ${selectedPlan === "free" && user.isPro
                            ? "bg-green-600 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                        disabled={selectedPlan === "free" && !user.isPro}
                    >
                        {selectedPlan === "free" && !user.isPro ? "Current Plan" : "Downgrade"}
                    </button>
                </div>

                {/* Pro Plan */}
                <div
                    className={`border rounded-lg p-6 cursor-pointer ${selectedPlan === "pro"
                        ? "border-blue-500 bg-gray-700"
                        : "border-gray-700 hover:bg-gray-700"
                        }`}
                    onClick={() => setSelectedPlan("pro")}
                >
                    <h4 className="text-lg font-bold">Pro Plan</h4>
                    <span className="text-xl font-bold">$9.99/mo</span>
                    <p className="text-gray-400 mb-4">Advanced features and analytics</p>
                    <button
                        className={`w-full py-2 rounded ${selectedPlan === "pro" && user.isPro
                            ? "bg-green-600 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                        disabled={selectedPlan === "pro" && user.isPro}
                    >
                        {selectedPlan === "pro" && user.isPro ? "Current Plan" : "Upgrade"}
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Payment History</h3>
                {user.isPro ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 text-left">Date</th>
                                    <th className="py-3 px-4 text-left">Description</th>
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example payment history */}
                                <tr className="border-t border-gray-700">
                                    <td className="py-3 px-4">May 1, 2023</td>
                                    <td className="py-3 px-4">Pro Plan Subscription</td>
                                    <td className="py-3 px-4">$9.99</td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs">
                                            Paid
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-gray-400 text-center py-8">
                        No payment history available
                    </div>
                )}
            </div>
        </div>
    );
} 