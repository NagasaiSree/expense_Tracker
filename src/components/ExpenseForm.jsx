import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (title.trim() === "" || amount.trim() === "") return;

    props.onAddExpense({
      title: title,
      amount: amount,
    });

    setTitle("");
    setAmount("");
  }

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
