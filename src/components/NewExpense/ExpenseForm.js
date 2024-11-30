import React, {useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm=()=>{
   

    const [userInput, setUserInput]= useState({
        enteredTitle :'',
        enteredAmount :'',
        enteredDate:'',}
    )


    const titleChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }
    const amountChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateChangeHandler=(event)=>{
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }

    return ( 
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="title" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" id="amount" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" id="date" min="2023-01-01" max="2025-01-01" value={userInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
           
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    );

}

export default ExpenseForm;