import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesChart from "./Chart/ExpensesChart";
import './ExpenseMain.css';


export default function ExpenseMain(props) {

    const [selectedYear, setYear] = useState('2020');

    function OptionData(year) {

        setYear(year);
    }

    let content = <p>Sorry no items found</p>;

    let fileterdByYear = props.expenses.filter(x => x.date.getFullYear('en-US', 'yy') == selectedYear);
    
    if (fileterdByYear.length > 0 ) {
        content = fileterdByYear.map(x => <ExpenseItem key={x.id} expenses={x}></ExpenseItem>);
    }

    return (

        <div className="expenses">
            <ExpensesFilter selected={selectedYear} optionData={OptionData}></ExpensesFilter>
            <ExpensesChart expenses={fileterdByYear}/>
            {content}
        </div>
        
    )
};