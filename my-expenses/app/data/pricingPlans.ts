import { FaHandshake, FaTrophy } from "react-icons/fa";
import PricingPlan from "~/model/PricingPlans";

const DUMMY_PRICING_PLANS: PricingPlan[] = [
  new PricingPlan(
    "p1",
    "Basic",
    "Free forever",
    ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    FaHandshake
  ),
  new PricingPlan(
    "p2",
    "Pro",
    "$9.99/month",
    ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    FaTrophy
  ),
];

export default DUMMY_PRICING_PLANS;
