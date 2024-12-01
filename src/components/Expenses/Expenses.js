import React from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses=(props)=> {
  const expenses = props.items;
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            location={expense.location}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
