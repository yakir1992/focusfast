import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
// import Testimonials11 from "@/components/Testimonials11";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Authentication Test</h1>

      {/* Server-side link */}
      <a
        href="/api/auth/signin"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Sign in (Server)
      </a>

      {/* Client-side button */}
      <div className="mt-4">
        <SignInButton />
      </div>
    </div>
  );
}