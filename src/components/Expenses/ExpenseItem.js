import { useState, useEffect } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";


function ExpenseItem(props){

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () =>{
    //     setTitle("Update!");

    //     //  State updates are asynchronous, which means that when you call the setState method to update the state of a component, the state may not be updated immediately.
    //     // Instead, React schedules the state update and batches multiple updates together to improve performance.
    //     // console.log(title);
    // }


    // To see the updated value of title, you can use the useEffect hook to log the value of title after the component has been re-rendered
    // The [title] dependency array tells React to re-run the effect whenever the value of title changes, so you will see the updated value of title in the console after the state update has been applied and the component has been re-rendered.
    // useEffect(() => {
    //     console.log(title);
    //   }, [title]);

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Click Me</button> */}
            </Card>
        </li>
    )
}

export default ExpenseItem;