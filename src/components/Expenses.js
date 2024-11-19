import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const expenses = props.items;
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            location={expense.location}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
