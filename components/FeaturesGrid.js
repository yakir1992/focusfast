/* eslint-disable @next/next/no-img-element */
import React from "react";

const features = [
  {
    title: "Neuro-Optimized Focus",
    description:
      "AI-calibrated sessions matched to your brain's natural ultradian rhythms for maximum focus efficiency.",
    icon: "🧠",
  },
  {
    title: "Distraction DNA™",
    description:
      "Analyzes your unique distraction patterns and preemptively blocks interruptions before they break your flow state.",
    icon: "🛡️",
  },
  {
    title: "Flow State Accelerator",
    description:
      "Proprietary sound technology using binaural beats that reduces time to deep focus from 23 minutes to just 5.",
    icon: "🎧",
  },
  {
    title: "Context Switch Guardian",
    description:
      "Measures and reduces the 23% productivity loss from task-switching by grouping similar activities in your optimal focus windows.",
    icon: "⚡",
  },
  {
    title: "Focus Environment Score",
    description:
      "Analyzes your lighting, sound, and setup to create the perfect focus environment unique to your personal preferences.",
    icon: "🌡️",
  },
  {
    title: "Team Sync Zones",
    description:
      "Coordinate undisturbed deep work across your team with synchronized focus sessions and shared achievements.",
    icon: "👥",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Science-Backed{" "}
            <span className="text-primary"> Focus Engineering</span>
          </h2>
          <p className="text-neutral-content/60 text-lg max-w-2xl mx-auto">
            Powered by neuroscience research and behavioral psychology to overcome
            modern work's biggest productivity barriers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-800/50 rounded-xl p-8 hover:bg-neutral-800 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-content/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
