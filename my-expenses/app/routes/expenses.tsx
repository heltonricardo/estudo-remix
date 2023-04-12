import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <main>
      <h1>* Shared Layout *</h1>
      <Outlet />
    </main>
  );
}
