import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    let [isFormShowed, setContent] = useState(false)

    function changeTitleHandler(event) {
        setTitle(event.target.value);
    }

    function changeAmountHandler(ev) {
        setAmount(ev.target.value);
    }

    function changeDateHandler(ev) {
        setDate(ev.target.value);
    }

    function SubmitHandler(ev) {
        ev.preventDefault();

        let newSubmit = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.expenseFormData(newSubmit);

        setTitle('');
        setAmount('');
        setDate('');

        setContent(false);
    }


    


    function cancelHandler(){

        setContent(false);
    }

    function showFormHandler(){

        setContent(true);
    }

    return (isFormShowed 
        ?
        <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={changeTitleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} min="0.01" step="0.01" onChange={changeAmountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} min="2020-01-01" max="2025-12-31" onChange={changeDateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={cancelHandler} >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form> 
    : <div><button onClick={showFormHandler}>Add New Expense</button></div>
    )
}