import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);                                 // --> Hook, has to be called in component function, also returns function to assign values to the parameter
  // //const used as are using func to assign value, react doesnt need to change ref  // First one is the accessor, second is a setter
  //                                                                                 // State for each component instance
  // const clickHandler = () => {
  //   console.log(title);                                                         //React will only schedule the change, will take a bit to update
  //   setTitle('newTitle');
  // }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>      
    </Card>
  );
}

export default ExpenseItem;
