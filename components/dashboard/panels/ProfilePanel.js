"use client";

import { useState } from "react";

export default function ProfilePanel({ user }) {
    const [profileData, setProfileData] = useState({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        timezone: user.timezone || "UTC",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the updated profile data to your API
        alert("Profile update functionality to be implemented");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled
                            />
                            <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
                        </div>

                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium mb-2">
                                Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows="4"
                                value={profileData.bio}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us a bit about yourself..."
                            />
                        </div>

                        <div>
                            <label htmlFor="timezone" className="block text-sm font-medium mb-2">
                                Timezone
                            </label>
                            <select
                                id="timezone"
                                name="timezone"
                                value={profileData.timezone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="UTC">UTC</option>
                                <option value="America/New_York">Eastern Time (ET)</option>
                                <option value="America/Chicago">Central Time (CT)</option>
                                <option value="America/Denver">Mountain Time (MT)</option>
                                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                                <option value="Europe/London">London</option>
                                <option value="Europe/Paris">Paris</option>
                                <option value="Asia/Tokyo">Tokyo</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-2 rounded-md"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h3>
                <p className="text-gray-400 mb-4">
                    Permanent account deletion. This action cannot be undone.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md">
                    Delete Account
                </button>
            </div>
        </div>
    );
} 