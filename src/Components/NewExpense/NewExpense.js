import React from "react";
import { useState } from "react";
import "./UI/ExpenseForm.css";
import "./UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import ExpenseDate from "../Expenses/ExpenseDate";
import FormGateWay from "./FormGateWay";



const NewExpense = ({ addExpense }) => {
  // const renderer = <FormGateWay className="new-expense"/>
  const [formGetWay,expenseForm] = useState();
  
  const FormClickHandler = () => {
    
  }
  
  const saveNewExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    }
    console.log(expenseData);
    addExpense(expenseData);

  };

  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveNewExpenseDataHandler} /> */}
       <FormGateWay formOpenHandler = {FormClickHandler}/>
      
    </div>
  );
}

export default NewExpense;
