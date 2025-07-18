import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  const plans = [
    {
      name: "Focus Starter",
      price: "9",
      features: [
        "Neural focus timers",
        "Distraction blocking",
        "Basic focus analytics",
        "Email support",
        "1 device"
      ]
    },
    {
      name: "Focus Pro",
      price: "29",
      features: [
        "Everything in Starter +",
        "Flow State Accelerator™",
        "Context switch detection",
        "Focus Fingerprint™ analysis",
        "Priority support",
        "3 devices"
      ]
    },
    {
      name: "Team Focus",
      price: "99",
      features: [
        "Everything in Pro +",
        "Team sync zones",
        "Focus analytics dashboard",
        "Productivity reporting",
        "Admin controls",
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
            Invest in Your Mental Performance
          </h2>
          <p className="text-neutral-content/60">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-neutral-800/50 rounded-xl p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-6">Perfect for {plan.name === "Focus Starter" ? "individuals" : plan.name === "Focus Pro" ? "professionals" : "teams"}</p>
              <div className="text-4xl font-bold text-primary mb-6">
                ${plan.price}
                <span className="text-lg text-neutral-content/60">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-neutral-content/80 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-neutral-800/30 rounded-xl max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
          <p className="text-neutral-400 mb-6">Custom focus engineering for organizations with 25+ team members.</p>
          <button className="py-2 px-6 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
