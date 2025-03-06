"use client";

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import ButtonSignin from './ButtonSignin';
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession(); // Get session data

  return (
    <section className="bg-neutral min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl tracking-tight text-white mb-8">
          Achieve deep focus
          <span className="block text-primary mt-2">in minutes, not hours</span>
        </h1>

        <p className="text-lg lg:text-xl text-neutral-content/80 max-w-3xl mx-auto mb-12">
          Drop into flow state on demand with FocusFast. No more wasted hours trying to concentrate. Start your focus journey now.
        </p>

        <div className="flex flex-col items-center gap-4">
          {session ? (
            <p className="text-lg text-white">Welcome back, {session.user.name}!</p>
          ) : (
            <ButtonSignin text="Boost your focus today" extraStyle="btn-primary btn-lg text-lg px-12" />
          )}
          <p className="text-sm text-neutral-content/60">
            7-day free trial.
          </p>
        </div>

        <div className="mt-16">
          <TestimonialsAvatars priority={true} />
          <p className="text-neutral-content/60 mt-4">
            Join 1000+ high-performing professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
