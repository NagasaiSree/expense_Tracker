function ExpenseList(props) {
  if (props.items.length === 0) {
    return <p className="empty">No expenses added yet.</p>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense, index) => (
        <li key={index}>
          <span>{expense.title}</span>
          <span>₹{expense.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
