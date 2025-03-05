export const dynamic = 'force-dynamic';

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading hero section...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading problem section...</div>}>
          <Problem />
        </Suspense>
        <Suspense fallback={<div>Loading how it works section...</div>}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<div>Loading features section...</div>}>
          <FeaturesGrid />
        </Suspense>
        {/* <Testimonials11 /> */}
        <Suspense fallback={<div>Loading pricing section...</div>}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div>Loading FAQ section...</div>}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div>Loading CTA section...</div>}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}