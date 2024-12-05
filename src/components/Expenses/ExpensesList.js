import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={props.items[0].id}
          title={props.items[0].title}
          date={props.items[0].date}
          price={props.items[0].price}
        />
        <p className="expenses-list__single">
          Only one expense found. Please add more.
        </p>
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
