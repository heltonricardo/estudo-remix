import Expense from "~/model/Expense";
import ExpenseListItem from "./ExpenseListItem";

interface Props {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: Props) {
  return (
    <ol id="expenses-list">
      {expenses.map(({ id, title, amount }: Expense) => (
        <li key={id}>
          <ExpenseListItem id={id} title={title} amount={amount} />
        </li>
      ))}
    </ol>
  );
}
