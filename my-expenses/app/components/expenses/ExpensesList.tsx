import Expense from "~/model/Expense";
import ExpenseListItem from "./ExpenseListItem";

interface Props {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: Props) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem title={expense.title} amount={expense.amount} />
        </li>
      ))}
    </ol>
  );
}
