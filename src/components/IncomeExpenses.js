import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Grab the transactions from global context
export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Grab the amounts array similar to balance
  const amounts = transactions.map((transaction) => transaction.amount);

  // Filter to get both income and expense
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
