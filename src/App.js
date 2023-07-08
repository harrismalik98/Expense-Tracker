import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";


const todayYear = new Date().getFullYear();

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Mobile Phone',
    amount: 999.99,
    date: new Date(todayYear, 11, 4),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(todayYear, 10, 18)
  },
  {
    id: 'e3',
    title: 'PS5',
    amount: 400,
    date: new Date(todayYear, 9, 27)
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 299.99,
    date: new Date(todayYear, 8, 23),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 500,
    date: new Date(todayYear, 7, 13),
  },
  {
    id: 'e6',
    title: 'Home Rent',
    amount: 199.99,
    date: new Date(todayYear, 6, 9)
  },
  {
    id: 'e7',
    title: 'Gym Membership Fee',
    amount: 99.99,
    date: new Date(todayYear, 5, 17),
  },
  {
    id: 'e8',
    title: 'Health Insurance',
    amount: 250,
    date: new Date(todayYear, 4, 12)
  },
  {
    id: 'e9',
    title: 'Entertainment',
    amount: 500,
    date: new Date(todayYear, 3, 4)
  },
  {
    id: 'e10',
    title: 'Memberships and Subscriptions',
    amount: 250,
    date: new Date(todayYear, 2, 1)
  },
  {
    id: 'e11',
    title: 'Childcare and School Costs',
    amount: 500,
    date: new Date(todayYear, 1, 10)
  },
  {
    id: 'e12',
    title: 'Utility Bills',
    amount: 250,
    date: new Date(todayYear, 0, 15)
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {

    // console.log("App.js");
    // console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
