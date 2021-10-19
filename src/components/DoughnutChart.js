import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";

// Grab the transactions
const DoughnutChart = () => {
  const { transactions } = useContext(GlobalContext);

  // Map the transaction categories into an array
  //   const categoriess = transactions.map((transaction) => transaction.category);

  // Testing data
  //   const grouped = transactions.reduce(
  //     (transactionItem, { category, title }) => {
  //       if (!transactionItem[category]) transactionItem[category] = [];
  //       transactionItem[category].push(title);
  //       return transactionItem;
  //     },
  //     {}
  //   );

  //set of unique categories
  const categorySet = new Set(
    transactions.map((transaction) => transaction.category)
  );

  // sort the set
  const categories = Array.from(categorySet);

  // make an array for each category
  let fake = transactions;
  fake = transactions.filter((transaction) => transaction.category == "home");
  console.log(fake);

  const homeTotal = fake.reduce(
    (totalAmount, home) => totalAmount + home.amount,
    0
  );
  console.log(homeTotal);

  // get the total for each category

  console.log(transactions);

  console.log(categories);

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Allocated funds",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Asset Allocations</h1>
      </div>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutChart;
