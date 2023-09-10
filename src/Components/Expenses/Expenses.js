import ExpengfdxszerdtyghbseItem from "./ExpenseItem";
import React, { useState } from 'react';
import Card from "../Card/Card";
import './UI/Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import FilteredExpenseHandler from "./FilteredExpenseHandler";
import Chart from "../Chart/Chart";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);  
    };

    const filteredExpenses = expenses.filter(expense =>{
        // console.log(expense.date.getFullYear().toString())
        return expense.date.getFullYear().toString() === filteredYear;
    });
    // console.log(filteredExpenses);
    console.log(expenses)
    
    return (
        
        <Card className="expenses">
            <Chart></Chart>
            <ExpenseFilter selected={filteredYear} onChnageYear={filterChangeHandler}/>
            <FilteredExpenseHandler expenses = {filteredExpenses}/>
            {/* <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[4].title} date={props.expenses[4].date} amount={props.expenses[4].amount}></ExpenseItem> */}
        </Card>
    ) 



}

export default Expenses; 