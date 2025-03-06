import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  const plans = [
    {
      name: "Personal Focus",
      price: "9",
      features: [
        "Unlimited focus sessions",
        "Basic focus analytics",
        "Email support",
        "1 device"
      ]
    },
    {
      name: "Pro Focus",
      price: "29",
      features: [
        "Everything in Personal +",
        "AI focus assistant",
        "Advanced analytics",
        "Priority support",
        "3 devices"
      ]
    },
    {
      name: "Team Focus",
      price: "99",
      features: [
        "Everything in Pro +",
        "Team focus coordination",
        "Admin dashboard",
        "API access",
        "Unlimited devices"
      ]
    }
  ];

  return (
    <section className="bg-neutral-900 py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">
            Choose Your Focus Plan
          </h2>
          <p className="text-neutral-content/60">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-neutral-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary mb-6">
                ${plan.price}
                <span className="text-lg text-neutral-content/60">/mo</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-neutral-content/80 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-get-started w-full mt-8">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
