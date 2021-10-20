import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flowers", amount: -25, category: "home" },
    { id: 2, text: "Pizza", amount: -40, category: "food" },
    { id: 3, text: "Camera", amount: 440, category: "technology" },
    { id: 4, text: "Television", amount: -50, category: "entertainment" },
    { id: 5, text: "Pay Day", amount: 500, category: "bills" },
    { id: 6, text: "Groceries", amount: -50, category: "groceries" },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // To use any actions, you must pass it down into the provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
