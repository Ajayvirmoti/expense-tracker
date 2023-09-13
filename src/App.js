import './App.css';
import Expenses from './Components/Expenses/Expenses';
import React, { useState } from 'react';
import Footer from "./Components/Footer/Footer";
import ExpenseForm from './Components/NewExpense/ExpenseForm';
import NewExpense from './Components/NewExpense/NewExpense';
import Graph from './Components/Chart/BarGraph';
import Chart from './Components/Chart/Chart';
import FormGateWay from './Components/NewExpense/FormGateWay';

const App = ()=> {
  // console.log("app reloaded");
// hello 
  console.log("hello")
  let expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2023, 7, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 7, 28),
    },
    {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 7, 12),
    },

    {
      id:'e6',
      title:'Books',
      amount: 634,
      date: new Date(2023, 7, 23),

    }
  ];

  const [ExpenseData,addNewExpenseData] = useState(expenses);
  const addExpenseHandler = (Expense) =>{
    addNewExpenseData(
      (previousExpense) =>{
        return [Expense,...previousExpense];
      }
    );
    // expenses = [...expenses,]
    console.log(expenses);
  };

  // const a = [...expenses,NewExpense];
  // console.log(a);

  // This is the alternaative code of the jsx code 
   
  // return(
  //   React.createElement('div', {}, React.createElement(Expenses,{ expenses:expenses }))
  // );

  // to add Form 

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const handleSwitchToExpenseForm = () => {
    setShowExpenseForm(true);
  };


  return (
    <div>

      {
        showExpenseForm ? (<NewExpense addExpense={addExpenseHandler}/>) : (
          <FormGateWay onSwitchToExpenseForm={handleSwitchToExpenseForm} />
        )
      }
      {/* <NewExpense addExpense={addExpenseHandler}/> */}
      <Expenses expenses={ExpenseData} />
      <Footer/>
    </div>
  );
}

export default App;
