import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Grab the delete transaction from Global state
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  // Using a ternary, update the sign for each transaction
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {" "}
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
