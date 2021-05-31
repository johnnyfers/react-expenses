import {useState} from 'react'
import './index.css'
import ExpenseItem from './ExpenseItem/index'
import Card from '../UI/Card/index'
import ExpensesFilter from './ExpensesFilter/index'

function Expanses(props) {

  const [filteredYear, setFilteredYear] = useState('2019')

  const filterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterHandler} selectedYear={filteredYear}/>
      <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} />
    </Card>
  )

}

export default Expanses