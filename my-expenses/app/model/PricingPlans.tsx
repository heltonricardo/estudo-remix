import { IconType } from "react-icons";

export default class PricingPlan {
  id: string;
  title: string;
  price: string;
  perks: string[];
  icon: IconType;

  constructor(id: string, title: string, price: string, perks: string[], icon: IconType) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.perks = perks;
    this.icon = icon;
  }
}
