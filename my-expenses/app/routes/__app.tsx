import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function ExpensesAppLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
