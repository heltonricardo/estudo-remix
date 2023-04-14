import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensePage() {
  return (
    <Modal onClose={() => {}}>
      <ExpenseForm />
    </Modal>
  );
}
