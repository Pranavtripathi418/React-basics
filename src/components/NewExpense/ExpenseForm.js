import React, {useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm=()=>{
   

    const [enteredTitle, setEnteredTitle]= useState("");
    const [enteredAmount, setEnteredAmount]= useState("");
    const [enteredDate, setEnteredDate]= useState("");


    const titleChangeHandler=(event)=>{
        setEnteredTitle (event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount (event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate (event.target.value);
    }

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            Title : enteredTitle,
            Amount : enteredAmount,
            Date : new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        
    }

    return ( 
    <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="title" value={enteredTitle}  onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" id="amount"  value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" id="date" min="2023-01-01" max="2025-01-01" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
           
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    );

}

export default ExpenseForm;