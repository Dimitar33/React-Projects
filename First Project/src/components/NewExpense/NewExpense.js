import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props){

    function ExpenseFormData(data){

        let formData = {
            ...data,
            id: Math.random().toString()
        }

        
        props.expenseData(formData);
    }


    return (
        <div className="new-expense">
           <ExpenseForm expenseFormData={ExpenseFormData}></ExpenseForm>
        </div>
    )
}