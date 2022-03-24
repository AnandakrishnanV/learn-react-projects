import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [inpTitle, setInpTitle] = useState(""); //usually preffered
  const [inpAmount, setInpAmount] = useState("");
  const [inpDate, setInpDate] = useState(""); //initalize with string as all target.values will be strings

  // const [userInp, setUserInp] = useState({
  //     inpTitle:'',
  //     inpAmount:'',
  //     inpDate:''
  // })

  const titleChangeHandler = (event) => {
    //    setUserInp({
    //        ...userInp,                               //since single state, have to manage the object by self so copy current state, then add overrides
    //        inpTitle: event.target.value,             //  can take time, use outdated states as React schedules
    //    });

    // setUserInp((prevState) => {                         // ensure we use latest state snapshot
    //     return {...prevState, inpTitle: event.target.value}
    // });

    setInpTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInpAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInpDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //to stop req sent to anywhere, prompting refresh

    const expenseData = {
      title: inpTitle,
      amount: inpAmount,
      date: new Date(inpDate),
    };

    props.onSaveExpenseData(expenseData);               //passing data UP
    setInpTitle("");
    setInpAmount("");
    setInpDate("");
  };

  //value prop is two-way binded
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inpTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inpAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inpDate}
            min="2019-01-01"
            max="2022-03-20"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
