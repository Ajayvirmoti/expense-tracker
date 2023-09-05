import React from "react";
import "./UI/ExpenseForm.css";
import "./UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import ExpenseDate from "../Expenses/ExpenseDate";



const NewExpense = ({ addExpense }) => {
  const saveNewExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    }
    console.log(expenseData, "hehe");
    addExpense(expenseData);

  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveNewExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
