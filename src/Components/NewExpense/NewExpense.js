import React from "react";
import { useState } from "react";
import "./UI/ExpenseForm.css";
import "./UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  // const renderer = <FormGateWay className="new-expense"/>
  
  const [formGetWay,expenseForm] = useState();
  
  // const FormClickHandler = () => {
  //   expenseForm((preState) =>{
  //     return "hello";
  //   })
    
  // }
  
  
  const saveNewExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    }
<<<<<<< Updated upstream
    console.log(expenseData);
=======
    console.log(expenseData, "hehe v1");
>>>>>>> Stashed changes
    addExpense(expenseData);

  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveNewExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
