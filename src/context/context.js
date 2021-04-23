import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
// initial state
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

// create context
export const ExpenseTrackerContext = createContext(initialState);


// provider components
export const Provider = (props) => {
 const [transactions, dispatch] = useReducer(contextReducer, initialState);
 
 // action creators
 const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
      dispatch({ type: "ADD_TRANSACTION", payload: transaction});
  }

  const balance = transactions.reduce((acc, currVal) => {
    return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount);
  }, 0);

 
 
 return (
        <ExpenseTrackerContext.Provider
        value ={{
          deleteTransaction,
          addTransaction,
          transactions,
          balance
        }}
        >
            {props.children}
        </ExpenseTrackerContext.Provider>
    )
}