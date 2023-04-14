import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import DUMMY_EXPENSES from "~/data/expenses";
import expensesStyles from "~/styles/expenses.css";

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
