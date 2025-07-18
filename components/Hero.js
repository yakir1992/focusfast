"use client";

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import ButtonSignin from './ButtonSignin';
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession(); // Get session data

  return (
    <section className="bg-neutral min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row items-center md:gap-12">
          <div className="text-center md:text-left md:w-2/3">
            <div className="mb-6 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Science-backed focus technology
            </div>
            <h1 className="font-extrabold text-4xl lg:text-7xl tracking-tight text-white mb-6 md:mb-8">
              Focus on demand.
              <span className="block text-primary mt-2">Guaranteed.</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-content/80 max-w-2xl mx-auto md:mx-0 mb-8 md:mb-12">
              FocusFast helps you enter flow state <span className="text-primary font-semibold">4.7x faster</span> than traditional methods. Neural entrainment technology and distraction blocking work together to give you more focus hours each day.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
              {session ? (
                <a href="/dashboard" className="btn btn-primary btn-lg text-lg px-12">
                  Go to Dashboard
                </a>
              ) : (
                <ButtonSignin text="Start free trial" extraStyle="btn-primary btn-lg text-lg px-12" />
              )}
              <p className="text-sm text-neutral-content/60 md:ml-4">
                7-day free trial. No credit card.
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <p className="text-neutral-content/60 mb-2 text-sm">TRUSTED BY TEAMS AT</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {["Microsoft", "Adobe", "Shopify", "Airbnb", "Notion"].map((company) => (
                  <div key={company} className="text-neutral-content/40 font-semibold text-sm md:text-base">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/3 mt-12 md:mt-0">
            <div className="relative bg-neutral-800 p-1 rounded-xl overflow-hidden border border-neutral-700">
              <div className="absolute top-0 left-1/2 w-1/2 h-1/3 bg-primary/20 blur-3xl -z-10"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/30 blur-3xl -z-10"></div>

              <div className="bg-neutral-900 rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-medium">Focus Session</div>
                  <div className="text-primary font-mono">43:12</div>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Focus depth</span>
                    <span className="text-primary">87%</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full" style={{ width: '87%' }}></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Flow state</span>
                    <span className="text-primary">Active</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Distractions blocked</span>
                    <span className="text-primary">12</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-800 rounded-lg text-sm text-center">
                  Current task: Product roadmap planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
