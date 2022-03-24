import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [selectedFilter, setSelectedFilter] = useState('2020')

  const changeFilterHandler = (filterValue) => {
    setSelectedFilter(filterValue)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedFilter} onChangeFilter={changeFilterHandler}></ExpenseFilter>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
