import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("food");

  const { addTransaction } = useContext(GlobalContext);

  // New transaction form
  const onSubmit = (e) => {
    e.preventDefault();

    // Not the best way, but okay to do this for now
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category,
    };

    addTransaction(newTransaction);

    // Reset the form
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Type</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter details..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="bills">Bills</option>
            <option value="groceries">Groceries</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
            <option value="pets">Pets</option>
          </select>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
