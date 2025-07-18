const Arrow = ({ extraStyle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${extraStyle}`}
    >
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  );
};

const Step = ({ emoji, text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl">{emoji}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
};

const Stat = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl md:text-5xl font-bold text-primary">{number}</span>
      <span className="text-sm md:text-base opacity-90 max-w-[200px] text-center">{label}</span>
    </div>
  );
};

const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          The Modern Brain Under Siege
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
          Your brain is fighting a losing battle against an environment engineered to fragment your attention. The cognitive cost is higher than you realize.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Stat number="4 min" label="average focus duration before interruption in modern workplace" />
          <Stat number="23.6%" label="productivity loss from mental context switching" />
          <Stat number="67 min" label="daily time required to return to deep focus after distractions" />
        </div>

        <h3 className="text-2xl font-bold mb-8">The Distraction Spiral</h3>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 mb-16">
          <Step emoji="📱" text="Notification overload" />
          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />
          <Step emoji="🧠" text="Cognitive fragmentation" />
          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />
          <Step emoji="⏱️" text="Attention deficit" />
          <Arrow extraStyle="md:-scale-x-100 md:-rotate-90" />
          <Step emoji="📉" text="Diminished performance" />
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Your Brain on Modern Work</h3>
          <p className="text-base opacity-90 mb-4">
            Each day, your focused attention is fractured into ever-smaller segments. This isn't just annoying—it fundamentally alters your brain's ability to perform deep work.
          </p>
          <div className="flex justify-center gap-6 pt-2">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">12.5x</div>
              <p className="text-xs opacity-70 mt-1">more digital interruptions than 10 years ago</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-primary">37%</div>
              <p className="text-xs opacity-70 mt-1">of knowledge workers never experience flow state</p>
            </div>
          </div>

          <div className="mt-8">
            <a href="/focus" className="btn btn-primary">
              Try the Focus Solution Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
