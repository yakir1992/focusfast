"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import OverviewPanel from "./panels/OverviewPanel";
import BillingPanel from "./panels/BillingPanel";
import SettingsPanel from "./panels/SettingsPanel";
import ProfilePanel from "./panels/ProfilePanel";

const PANELS = {
    overview: OverviewPanel,
    billing: BillingPanel,
    settings: SettingsPanel,
    profile: ProfilePanel,
};

export default function DashboardClient({ user }) {
    const [activePanel, setActivePanel] = useState("overview");

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    const ActivePanel = PANELS[activePanel];

    return (
        <div className="flex min-h-screen bg-neutral-900 text-white">
            <DashboardSidebar
                activePanel={activePanel}
                setActivePanel={setActivePanel}
            />

            <div className="flex-1 flex flex-col">
                <DashboardHeader
                    user={user}
                    onSignOut={handleSignOut}
                />

                <main className="flex-1 p-6 overflow-auto">
                    <div className="max-w-6xl mx-auto">
                        <ActivePanel user={user} />
                    </div>
                </main>
            </div>
        </div>
    );
} 