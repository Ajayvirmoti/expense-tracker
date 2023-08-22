import '../UI/ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div className='calender'>
            <div className='expense-item-date-day'>{day}</div>
            <div className='expense-item-date-month'>{month}</div>
            <div className='expense-item-date-year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;