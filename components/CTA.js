import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Transform Your Focus Today
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Join thousands of professionals who have unlocked their peak mental performance.
            Your journey to enhanced focus and productivity starts here.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="btn btn-primary btn-wide btn-lg">
              Start Free Trial
            </button>
            <p className="text-sm opacity-70">
              14-day free trial • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
