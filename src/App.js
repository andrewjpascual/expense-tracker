import React from "react";
import "./App.css";

// Import each component
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import DoughnutChart from "./components/DoughnutChart";

// Import Provider from context
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <DoughnutChart />
      </div>
    </GlobalProvider>
  );
}

export default App;
