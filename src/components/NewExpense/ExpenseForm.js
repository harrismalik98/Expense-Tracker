import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    // const [input, setInput] = useState({
    //     title:"",
    //     amount:"",
    //     date:""
    // });
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);

        // setInput({
        //     ...input,
        //     title: event.target.value
        // });


        // setInput((prevState) => { 
        //    return {...prevState, title:event.target.value};
        // });

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setInput({
        //     ...input,
        //     amount:event.target.value
        // })

        // setInput((prevState) => {
        //     return {...prevState, amount:event.target.value};
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

        // setInput({
        //     ...input,
        //     date:event.target.value
        // })

        // setInput((prevState) => {
        //     return {...prevState, date:event.target.value};
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // console.log(`${enteredTitle} ${enteredAmount} ${enteredDate}`);

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,  // It explicitly converts the enteredAmount string to a number using the unary plus operator. Any arithmetic operations performed on the amount property will be accurate and predictable.
            date: new Date(enteredDate), // Parse date string into date object.
        };

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);


        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2029-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;