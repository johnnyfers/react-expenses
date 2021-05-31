import './index.css'
import ExpenseForm from './ExpenseForm/index'
import {useState} from 'react'

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)

    const isEditingHandler = ()=> {
        setIsEditing(true)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        setIsEditing(false)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const cancelButtonHandler = ()=> {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}> Add New Expense </button>}
            
            {isEditing && <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                cancelClick={cancelButtonHandler}/>
            }
        </div>
    )
}

export default NewExpense