import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div className='expense-date'>
                Date : 23 july 2023
            </div>
            <div className='expense-item-name'>
                <p> Car Insurence</p>
                <p> 2300 Rs /- </p>
            </div>
        </div>
    )
}

export default ExpenseItem;