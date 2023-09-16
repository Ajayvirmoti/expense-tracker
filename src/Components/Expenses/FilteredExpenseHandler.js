import React from "react";
import ExpenseItem from "./ExpenseItem";
import './UI/FilteredExpenseHandler.css'

const FilteredExpenseHandler = (props) => {
    let renderExpense = <h1 className="filterdExpense-no-data-found">No data found</h1>
    // console.log(props.expenses);
    // const date = new Date(props.expenses[0].date);
    // console.log(date.getMonth())
    // let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // for (const item of props.expenses) {
    //     const date = new Date(item.date);
    //     // console.log(date.getMonth());
    //     // JavaScript months are zero-based
    //     const temp = date.getMonth();
    //     switch (temp) {
    //       case 0:
    //         month[0]++;
    //         break;
    //       case 1:
    //         month[1]++;
    //         break;
    //       case 2:
    //         month[2]++;
    //         break;
    //       case 3:
    //         month[3]++;
    //         break;
    //       case 4:
    //         month[4]++;
    //         break;
    //       case 5:
    //         month[5]++;
    //         break;
    //       case 6:
    //         month[6]++;
    //         break;
    //       case 7:
    //         month[7]++;
    //         break;
    //       case 8:
    //         month[8]++;
    //         break;
    //       case 9:
    //         month[9]++;
    //         break;
    //       case 10:
    //         month[10]++;
    //         break;
    //       case 11:
    //         month[11]++;
    //         break;  
    //       default:
    //         month[12]++;
    //     }
    //   }
    //   // props.countFilteredMonth(month);
      

    
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