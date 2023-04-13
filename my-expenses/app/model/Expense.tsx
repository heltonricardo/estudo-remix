export default class Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;

  constructor(id: string, title: string, amount: number, date: Date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }
}
