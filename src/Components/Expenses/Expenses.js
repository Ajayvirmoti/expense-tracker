import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import '../UI/Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem>
        </Card>
    )
}

export default Expenses; 