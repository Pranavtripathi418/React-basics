import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };


  const showFormHandler = () => {
    setIsFormVisible(true); // Show the form
  };

  const hideFormHandler = () => {
    setIsFormVisible(false); // Hide the form
  };

  return (
    <div className="new-expense">
       {!isFormVisible && (
        <button onClick={showFormHandler}>Add Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler} // Pass the hide form handler
        />
      )}
    </div>
  );
};

export default NewExpense;