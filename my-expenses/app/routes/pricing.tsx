import PricingPlan from "~/components/marketing/PricingPlan";
import DUMMY_PRICING_PLANS from "~/data/pricingPlans";

export default function PricingPage() {
  return (
    <main id="pricing">
      <h2>Great Product, Simple Pricing</h2>
      <ol id="pricing-plans">
        {DUMMY_PRICING_PLANS.map((plan) => (
          <li key={plan.id} className="plan">
            <PricingPlan title={plan.title} price={plan.price} perks={plan.perks} icon={plan.icon} />
          </li>
        ))}
      </ol>
    </main>
  );
}
