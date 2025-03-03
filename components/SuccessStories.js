const SuccessStories = () => {
    return (
        <section className="bg-base-200 py-24">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center mb-16">
                    From Distracted to <span className="text-primary">Focused</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <StoryCard key={i} {...story} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const stories = [
    {
        name: "Software Developer",
        metric: "3x",
        result: "more code commits",
        quote: "FocusFast helped me achieve deep work states I never thought possible. My productivity has skyrocketed."
    },
    {
        name: "Creative Director",
        metric: "2hrs",
        result: "saved daily",
        quote: "The AI assistant keeps me on track and blocks distractions before they even happen. Game changer!"
    },
    {
        name: "Product Manager",
        metric: "45%",
        result: "more tasks completed",
        quote: "Our entire team uses FocusFast for synchronized focus sessions. We get more done in less time."
    }
];

const StoryCard = ({ name, metric, result, quote }) => {
    return (
        <div className="bg-base-100 p-8 rounded-xl shadow-lg">
            <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{metric}</span>
                    <span className="text-lg">{result}</span>
                </div>
                <p className="text-base-content/80 italic">"{quote}"</p>
                <p className="font-medium">{name}</p>
            </div>
        </div>
    );
};

export default SuccessStories; 