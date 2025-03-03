/* eslint-disable @next/next/no-img-element */
import React from "react";

const features = [
  {
    title: "AI Focus Assistant",
    description: "Smart AI that learns your work patterns and automatically blocks distractions before they break your focus.",
    icon: "🤖",
  },
  {
    title: "Focus Analytics",
    description: "Track your daily focus scores and productivity trends with detailed insights and recommendations.",
    icon: "📊",
  },
  {
    title: "Team Sync",
    description: "Coordinate focus sessions with your team and celebrate productivity wins together.",
    icon: "🤝",
  },
  {
    title: "Smart Breaks",
    description: "Scientifically timed breaks to maintain peak mental performance throughout the day.",
    icon: "⏰",
  },
  {
    title: "Noise Control",
    description: "AI-powered background noise management and smart notification filtering.",
    icon: "🎧",
  },
  {
    title: "Progress Tracking",
    description: "Visualize your improvement over time and identify peak productivity patterns.",
    icon: "📈",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Master Your Focus
            <span className="text-primary"> Amplify Results</span>
          </h2>
          <p className="text-neutral-content/60 text-lg max-w-2xl mx-auto">
            Advanced features powered by AI to help you achieve and maintain deep focus states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-neutral-800/50 rounded-xl p-8 hover:bg-neutral-800 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-neutral-content/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
