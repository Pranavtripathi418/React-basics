import "./ExpenseItem.css";
function ExpenseItem() {
    const ExpenseDate= new Date(2024,7,15).toISOString();
    const ExpenseAmount= 10;
    const ExpenseTitle = 'Book';
    const ExpenseLocation= 'Mumbai'; 
  return (
    <div className="expense-item">
      <div className="expense-item__date">{ExpenseDate}</div>
      <div className="expense-item__location">{ExpenseLocation}</div>
      <div className="expense-item__description">
        <h2>{ExpenseTitle}</h2>
        <div className="expense-item__price">${ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
