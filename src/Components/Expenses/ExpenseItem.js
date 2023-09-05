import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from './ExpenseDate';
import './UI/ExpenseItem.css';

const ExpenseItem  = (props) => {
    const title = props.title;
    const amount  = props.amount;
    const date  = props.date;
    // const [title,setTitle] = useState(props.title);

    // const clickHandler = () =>{
    //     setTitle('Updated');
    // };
   

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-details'>
                <h2>{title}</h2>
                <div className='expense-amount'> ₹ {amount}</div>
            </div>
            {/* <button onClick={clickHandler}>button</button> */}
            
        </Card>
    )
}

export default ExpenseItem;