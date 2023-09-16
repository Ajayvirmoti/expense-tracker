// import ExpengfdxszerdtyghbseItem from "./ExpenseItem";
import React, { useState } from 'react';
import Card from "../Card/Card";
import './UI/Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import FilteredExpenseHandler from "./FilteredExpenseHandler";
import Chart from "../Chart/Chart";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    // const [filtredMonth, updateFilteredMonth] = useState("non")
    // const FilteredMonthHandler = monthData =>{
    //     updateFilteredMonth(monthData);
    // }
    let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);  
    };
    // console.log("hello");
    

    
    

    const filteredExpenses = expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    for (const item of filteredExpenses) {
        const date = new Date(item.date);
        // console.log(date.getMonth());
        // JavaScript months are zero-based
        const temp = date.getMonth();
        switch (temp) {
          case 0:
            month[0]++;
            break;
          case 1:
            month[1]++;
            break;
          case 2:
            month[2]++;
            break;
          case 3:
            month[3]++;
            break;
          case 4:
            month[4]++;
            break;
          case 5:
            month[5]++;
            break;
          case 6:
            month[6]++;
            break;
          case 7:
            month[7]++;
            break;
          case 8:
            month[8]++;
            break;
          case 9:
            month[9]++;
            break;
          case 10:
            month[10]++;
            break;
          case 11:
            month[11]++;
            break;  
          default:
            month[12]++;
        }
      }

    return (
        <Card className="expenses">
            <Chart monthsFrequencies = {month}></Chart>
            <ExpenseFilter  onChnageYear={filterChangeHandler}/>
            <FilteredExpenseHandler expenses = {filteredExpenses} />
            {/* <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[4].title} date={props.expenses[4].date} amount={props.expenses[4].amount}></ExpenseItem> */}
        </Card>
    ) 



}

export default Expenses; 