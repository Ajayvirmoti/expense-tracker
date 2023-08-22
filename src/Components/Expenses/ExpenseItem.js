import Card from '../Card';
import ExpenseDate from './ExpenseDate';
import '../UI/ExpenseItem.css';

function ExpenseItem(props) {
   
    return (
        <Card className='expense-item'>
           
            <ExpenseDate date={props.date}/>
            <div className='expense-details'>
                <h2>{props.title}</h2>
                <div className='expense-amount'> ₹ {props.amount}</div>
            </div>
            
        </Card>
    )
}

export default ExpenseItem;