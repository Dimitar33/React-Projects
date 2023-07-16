import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

  export default function ExpenseItem(props){

    return (
        <div className="expense-item">
            <ExpenseDate date={props.expenses.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenses.title}</h2>
                <div className="expense-item__price">${props.expenses.amount}</div>
            </div>
        </div>
    ); 

  };