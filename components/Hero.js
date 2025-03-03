import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-neutral text-neutral-content flex flex-col items-center justify-center gap-8 py-20 px-8 text-center">
      <h1 className="font-black text-5xl md:text-7xl tracking-tight max-w-4xl">
        Create Deep Focus
        <span className="text-primary"> with No Distractions</span>
      </h1>

      <p className="text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
        Add custom focus sessions, productivity tracking, and AI-powered distraction blocking without any technical setup. Get focused in minutes.
      </p>

      <div className="flex flex-col items-center gap-4">
        <button className="btn btn-primary btn-lg">
          Start Your Focus Journey
        </button>
        <p className="text-sm opacity-70">
          *7 days free trial. Cancel anytime.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <TestimonialsAvatars priority={true} />
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2">from 1000+ focus achievers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
