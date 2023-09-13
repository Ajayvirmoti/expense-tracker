import React from "react";
import { useState } from "react";
import "./UI/ExpenseForm.css";
import "./UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense,onCloseForm }) => {
  // const renderer = <FormGateWay className="new-expense"/>
  
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
    addExpense(expenseData);

  };

  const FormCloseHandler = (flag) =>{
    onCloseForm(flag);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveNewExpenseDataHandler} onCloseForm_ = {FormCloseHandler}/>
    </div>
  );
}

export default NewExpense;
