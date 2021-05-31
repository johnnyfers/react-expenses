import { useState } from 'react'
import './index.css'
import Card from '../UI/Card/index'
import ExpensesFilter from './ExpensesFilter/index'
import ExpensesList from './ExpensesList/index'
import ExpansesChart from './ExpensesChart/index'

function Expanses(props) {

  const [filteredYear, setFilteredYear] = useState('2019')

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }

  const filterExpanses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterHandler}
        selectedYear={filteredYear} 
      />

      <ExpansesChart expenses={filterExpanses}/>

      <ExpensesList items={filterExpanses}/>
    </Card>
  )
}

export default Expanses