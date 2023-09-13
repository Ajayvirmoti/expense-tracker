import React, { useDebugValue, useEffect, useState } from "react";
import "./UI/ExpenseForm.css";
// import Card from "../UI/Card";
// import ExpenseDate from "../Expenses/ExpenseDate";
// import { title } from "process";
import "./NewExpense";
// import { title } from "process";

const ExpenseForm = (props) => {

  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [isAlertvisible, setAlertVisible] = useState(false);

  // An Alternative way to prevent multiple useState() function 

  // const [inputValue, setValue] = useState(
  //     {
  //         enteredTitle : "",
  //         enteredAmount: "",
  //         enteredDate : "",
  //     }
  // )

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);


    // setInputTitle({
    //     ...inputTitle,
    //     enteredTitle:event.target.value,
    // });

    // if the values are depending on the previous state then use bellow code to update the values of current state 

    // setValue((previousState)=>{
    //     return({...previousState, enteredTitle : event.target.value})
    // })

  }
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

  }
  const dateChangeHandler = (event) => {
    console.log(event)
    setInputDate(event.target.value);

  }

  

  // Submit Button handler 
  const submitHandler = (event) => {
    // prevent reloading of page on submition of form 
    event.preventDefault();

    if (inputAmount == "" || inputDate == "Invalid Date" || inputTitle == "") {
      alert("Invalid Data")
    } else {
      const submitData = {
        title: inputTitle,
        amount: inputAmount,
        date: new Date(inputDate),
      };
      // setAlertVisible(true);
      // alert("Form Submitted");
    //   message("form submitted");
      setAlertVisible();

      setTimeout(alert('close'), 3000);

      props.onSaveExpenseData(submitData);

    }


    setInputTitle('');
    setInputAmount('');
    setInputDate('');

    // console.log(submitData);



  };

  const FormCloseHandler = () =>{
    props.onCloseForm_(false);
  }




  return (
    <form className="new-expense__form" onSubmit={submitHandler}>
      {isAlertvisible}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" alt="expense-input" onChange={titleChangeHandler} value={inputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1.0" step=".1" onChange={amountChangeHandler} value={inputAmount} />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2022-01-01" max="2030-01-01" onChange={dateChangeHandler} value={inputDate} />
      </div>
      <div className="new-expense__actions">
        <div className="button"> 
          <button onClick={FormCloseHandler}> Close</button>
        </div>
        <div className="button">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
