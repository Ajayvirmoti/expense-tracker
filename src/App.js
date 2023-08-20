import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  return (
    <div className='app-home'>
      <div></div>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
