import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";

// Grab the transactions
const DoughnutChart = () => {
  const { transactions } = useContext(GlobalContext);

  //set of unique categories
  const categorySet = new Set(
    transactions.map((transaction) => transaction.category)
  );

  // Sort the set
  const categories = Array.from(categorySet).sort();

  // Now make an array for each category

  // All food payments and total amount
  let foodM = transactions;
  foodM = transactions.filter((transaction) => transaction.category === "food");

  const foodTotal = foodM.reduce(
    (totalAmount, food) => totalAmount + food.amount,
    0
  );

  // All home payments and total amount
  let homeM = transactions;
  homeM = transactions.filter((transaction) => transaction.category === "home");
  console.log(homeM);

  const homeTotal = homeM.reduce(
    (totalAmount, home) => totalAmount + home.amount,
    0
  );
  console.log(homeTotal);

  // All bill payments and total amount
  let billM = transactions;
  billM = transactions.filter(
    (transaction) => transaction.category === "bills"
  );

  const billsTotal = billM.reduce(
    (totalAmount, bills) => totalAmount + bills.amount,
    0
  );

  // All groceries payments and total amount
  let groceriesM = transactions;
  groceriesM = transactions.filter(
    (transaction) => transaction.category === "groceries"
  );

  const groceriesTotal = groceriesM.reduce(
    (totalAmount, groceries) => totalAmount + groceries.amount,
    0
  );

  // All technology payments and total amount
  let technologyM = transactions;
  technologyM = transactions.filter(
    (transaction) => transaction.category === "technology"
  );

  const technologyTotal = technologyM.reduce(
    (totalAmount, technology) => totalAmount + technology.amount,
    0
  );

  // All health payments and total amount
  let healthM = transactions;
  healthM = transactions.filter(
    (transaction) => transaction.category === "health"
  );

  const healthTotal = healthM.reduce(
    (totalAmount, health) => totalAmount + health.amount,
    0
  );

  // All entertainment payments and total amount
  let entertainmentM = transactions;
  entertainmentM = transactions.filter(
    (transaction) => transaction.category === "entertainment"
  );

  const entertainmentTotal = entertainmentM.reduce(
    (totalAmount, entertainment) => totalAmount + entertainment.amount,
    0
  );

  // All travel payments and total amount
  let travelM = transactions;
  travelM = transactions.filter(
    (transaction) => transaction.category === "travel"
  );

  const travelTotal = travelM.reduce(
    (totalAmount, travel) => totalAmount + travel.amount,
    0
  );

  // All pets payments and total amount
  let petsM = transactions;
  petsM = transactions.filter((transaction) => transaction.category === "pets");

  const petsTotal = petsM.reduce(
    (totalAmount, pets) => totalAmount + pets.amount,
    0
  );

  // All pets payments and total amount
  let lifestyleM = transactions;
  lifestyleM = transactions.filter(
    (transaction) => transaction.category === "lifestyle"
  );

  const lifestyleTotal = lifestyleM.reduce(
    (totalAmount, lifestyle) => totalAmount + lifestyle.amount,
    0
  );

  console.log(transactions);

  console.log(categories);

  const data = {
    labels: [
      "Food",
      "Home",
      "Bills",
      "Groceries",
      "Technology",
      "Health",
      "Entertainment",
      "Travel",
      "Pets",
      "Lifestyle",
    ],
    datasets: [
      {
        label: "Allocated funds",
        data: [
          foodTotal,
          homeTotal,
          billsTotal,
          groceriesTotal,
          technologyTotal,
          healthTotal,
          entertainmentTotal,
          travelTotal,
          petsTotal,
          lifestyleTotal,
        ],
        backgroundColor: [
          "rgba(255, 51, 0, 0.7)", //Food
          "rgba(54, 162, 235, 0.7)", //Home
          "rgba(255, 204, 0, 0.7)", //Bills
          "rgba(255, 153, 0, 0.7)", //Groceries
          "rgba(77, 77, 255, 0.7)", // Tech
          "rgba(255, 102, 255, 0.7)", //Health
          "rgba(0, 102, 0, 0.7)", //Entertainment
          "rgba(102, 255, 51, 0.7)", //Travel
          "rgba(102, 0, 204, 0.7)", //Pets
          "rgba(255, 102, 102,0.7)", //Lifestyle
        ],
        borderColor: [
          "rgba(255, 51, 0, 1)", //Food
          "rgba(54, 162, 235, 1)", //Home
          "rgba(255, 204, 0, 1)", //Bills
          "rgba(255, 153, 0, 1)", //Groceries
          "rgba(77, 77, 255, 1)", // Tech
          "rgba(255, 102, 255, 1)", //Health
          "rgba(0, 102, 0, 1)", //Entertainment
          "rgba(102, 255, 51, 1)", //Travel
          "rgba(102, 0, 204, 1)", //Pets
          "rgba(255, 102, 102,1)", //Lifestyle
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
