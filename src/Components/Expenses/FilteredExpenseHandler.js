import React from "react";
import ExpenseItem from "./ExpenseItem";
import './UI/FilteredExpenseHandler.css'

const FilteredExpenseHandler = (props) => {
    let renderExpense = <h1 className="filterdExpense-no-data-found">No data found</h1>
    
    if (props.expenses.length > 0) {
        renderExpense = props.expenses.map(items =>
            <ExpenseItem
                key={items.id}
                title={items.title}
                amount={items.amount}
                date={items.date}
    
            />
        )
    }
    
    return ( renderExpense );
}

export default FilteredExpenseHandler;