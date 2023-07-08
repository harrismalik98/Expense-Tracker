import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {

  const todayYear = new Date().getFullYear().toString();
  
  const [filteredYear, setFilteredYear] = useState(todayYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses;

      {/* map() returns a new array that is the result of applying a function to each element of an existing array. In React, this new array can be used to render a list of elements by wrapping it in curly braces {} */}
      {/* We transformed our array into array of JSX elements => {[<ExpenseItem 1 />, <ExpenseItem 2 /> ...]} */}


      {/* Without key React re-render the entire list from array when any item is added.
      But if key is available react not re-render all list item but only add or update that item */}

      {/* {filteredExpenses.map(expense =>
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      )} */}

      {/* {expensesContent} */}

      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}