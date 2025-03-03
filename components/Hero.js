import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="bg-neutral min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl tracking-tight text-white mb-8">
          Unleash Your Focus
          <span className="block text-primary mt-2">Outperform Everyone</span>
        </h1>

        <p className="text-lg lg:text-xl text-neutral-content/80 max-w-3xl mx-auto mb-12">
          Stop letting distractions control your day. FocusFast combines cutting-edge AI with proven focus techniques to help you achieve deep work states faster.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="btn btn-primary btn-lg text-lg px-12">
            Start Free Trial
          </button>
          <p className="text-sm text-neutral-content/60">
            *14-day free trial. No credit card required.
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
