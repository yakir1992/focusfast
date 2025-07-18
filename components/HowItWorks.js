const HowItWorks = () => {
    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center mb-16">
                    The <span className="text-primary">Science</span> Behind Focus
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <Step key={i} number={i + 1} {...step} />
                    ))}
                </div>

                <div className="mt-16 p-6 bg-neutral-800/30 rounded-xl">
                    <h3 className="text-xl font-medium text-center mb-6">The Focus Engineering Process</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <div className="text-4xl font-bold text-primary">87%</div>
                            <p className="text-sm text-neutral-content/70 mt-2">of users report reaching flow state faster</p>
                        </div>

                        <div className="h-px w-full md:h-24 md:w-px bg-neutral-700"></div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary">23 min</div>
                            <p className="text-sm text-neutral-content/70 mt-2">average time saved per focus session</p>
                        </div>

                        <div className="h-px w-full md:h-24 md:w-px bg-neutral-700"></div>

                        <div className="text-center md:text-right">
                            <div className="text-4xl font-bold text-primary">32%</div>
                            <p className="text-sm text-neutral-content/70 mt-2">increase in completed deep work tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const steps = [
    {
        title: "Analyze",
        description: "Our proprietary algorithm identifies your unique focus patterns, distraction triggers, and optimal work rhythms through behavioral analysis."
    },
    {
        title: "Optimize",
        description: "Using neuroscience-backed techniques, we create personalized focus sessions timed to your brain's natural ultradian rhythm cycles."
    },
    {
        title: "Accelerate",
        description: "Environmental calibration, neural audio entrainment, and proactive distraction blocking combine to cut your time-to-focus by 78%."
    }
];

const Step = ({ number, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-bold">
                {number}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base-content/80">{description}</p>
        </div>
    );
};

export default HowItWorks;