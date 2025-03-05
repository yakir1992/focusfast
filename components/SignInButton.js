"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            // Log the process for debugging
            console.log("Starting Google sign-in process...");

            // Use signIn with specific parameters for debugging
            await signIn("google", {
                callbackUrl: "/dashboard",
                redirect: true
            });
        } catch (error) {
            console.error("Sign-in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {isLoading ? "Signing in..." : "Sign in with Google (Client)"}
        </button>
    );
} 