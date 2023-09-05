import './UI/ExpenseDate.css';
import React from 'react';
const ExpenseDate = ({date}) =>{
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className='calender'>
            <div className='expense-item-date-day'>{day}</div>
            <div className='expense-item-date-month'>{month}</div>
            <div className='expense-item-date-year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;