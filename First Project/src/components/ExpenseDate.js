import './ExpenseDate.css'

export default function ExpenseDate(props){

let day = props.date.toLocaleDateString('en-US', {day: '2-digit'});
let month = props.date.toLocaleDateString('en-US', {month: 'long'});
let year = props.date.getFullYear('en-US', 'yy');

    return (

        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};