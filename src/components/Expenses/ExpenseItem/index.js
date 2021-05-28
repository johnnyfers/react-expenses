import ExpenseDate from '../ExpenseDate/index'
import './index.css'
import Card from '../../UI/Card/index'
import { useState } from 'react'

function ExpenseItem(props) {

    let [title, setTitle] = useState(props.title)

    const clickHandler = ()=>{
        if(title === 'update'){
            setTitle(props.title)
        } else{
            setTitle('update')
        }
    }
  
    return (
    <Card className="expense-item ">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description ">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>)
}

export default ExpenseItem