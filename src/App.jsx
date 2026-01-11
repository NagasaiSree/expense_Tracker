import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
      <h2 className="total">Total: ₹{total}</h2>
    </div>
  );
}

export default App;
