"use client";

import { useState } from "react";

export default function ProfilePanel({ user }) {
    const [profileData, setProfileData] = useState({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
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

            <form onSubmit={handleSubmit} className="bg-card text-card-foreground rounded-lg shadow p-6 mb-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-transparent border-neutral-700"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-transparent border-neutral-700"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bio">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-transparent border-neutral-700"
                    />
                </div>

                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                    Save Changes
                </button>
            </form>
        </div>
    );
}