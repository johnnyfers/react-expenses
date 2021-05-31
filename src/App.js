import Expanses from './components/Expenses/index'
import NewExpense from './components/NewExpense/index'
import { useState } from 'react'

const expensesData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(expensesData)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expanses items={expenses}/>
    </div>
  );
}

export default App;
