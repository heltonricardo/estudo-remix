import Expense from "~/model/Expense";

const DUMMY_EXPENSES: Expense[] = [
  new Expense("1", "First expense", 19.99, new Date("2023-01-13")),
  new Expense("2", "Second expense", 38.49, new Date("2023-03-18")),
  new Expense("3", "Third expense", 23.45, new Date("2023-04-10")),
];

export default DUMMY_EXPENSES;
