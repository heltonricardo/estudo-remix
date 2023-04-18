import { Outlet } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";

export default function MarketingLayout() {
  return <Outlet />;
}

export const links = () => [{ rel: "stylesheet", href: marketingStyles }];
