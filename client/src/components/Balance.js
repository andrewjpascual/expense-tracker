import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Grab the transactions
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  //This maps all of the transaction amounts into an array and gets total to 2 decimals
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-con">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
