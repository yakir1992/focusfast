const HowItWorks = () => {
    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center mb-16">
                    How FocusFast Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <Step key={i} number={i + 1} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const steps = [
    {
        title: "Set Your Goals",
        description: "Choose your focus duration, set priorities, and let our AI learn your peak productivity hours."
    },
    {
        title: "Enter Focus Mode",
        description: "Our AI assistant automatically blocks distractions and creates your ideal work environment."
    },
    {
        title: "Track Progress",
        description: "Get detailed analytics on your focus sessions and personalized tips to improve your productivity."
    }
];

const Step = ({ number, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-bold">
                {number}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base-content/80">{description}</p>
        </div>
    );
};

export default HowItWorks; 