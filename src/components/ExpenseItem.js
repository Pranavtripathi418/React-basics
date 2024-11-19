import "./ExpenseItem.css";
function ExpenseItem(props) {
   const month = ['January','February','March','April','May','June',"July",'August','September','October','November','December']
   const months= month[props.date.getMonth()];
   const year =props.date.getFullYear();
   const date= props.date.getDate();
  return (
    <div className="expense-item">
      <div>
        <div>{months}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
