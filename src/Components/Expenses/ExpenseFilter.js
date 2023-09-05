import React from "react";
import './UI/ExpenseFilter.css';
const ExpenseFilter =  (props)=>{
    const onClickHandler = (event) =>{
        props.onChnageYear(event.target.value);
        // console.log(event.target.value);
    }


    return(
        <div className="expense-filter">
            <div className="expense-filter-menu">
                <label>Filter By Year </label>
                <select className="select">
                    <option value='2023' onClick={onClickHandler}>2023</option>
                    <option value='2022' onClick={onClickHandler}>2022</option>
                    <option value='2021' onClick={onClickHandler}>2021</option>
                    <option value='2020' onClick={onClickHandler}>2020</option>
                    <option value='2020' onClick={onClickHandler}>2020</option>
                </select>
            </div>
        </div>


    );

}

export default ExpenseFilter;