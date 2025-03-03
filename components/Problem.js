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
      <span className="text-sm md:text-base opacity-90 max-w-[200px]">{label}</span>
    </div>
  );
};

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          The Hidden Cost of Distraction in Today's Workplace
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
          Modern professionals lose more than just time to distractions - they lose momentum, creativity, and career growth opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Stat number="23%" label="of work time lost to distractions" />
          <Stat number="45min" label="average time to refocus after interruption" />
          <Stat number="$10,000+" label="cost of lost productivity per employee/year" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 mt-16">
          <Step emoji="📱" text="Constant notifications" />
          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />
          <Step emoji="😫" text="Mental exhaustion" />
          <Arrow extraStyle="md:-scale-x-100 md:-rotate-90" />
          <Step emoji="📉" text="Decreased performance" />
        </div>
      </div>
    </section>
  );
};

export default Problem;
