import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (inpExpenseData) => {
    const expenseData = {
      ...inpExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
  };
                                                                                                    //onSave is a handler that will send the function as prop, recive comm from below
   
    return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />                
    </div>
  );
};

export default NewExpense;
