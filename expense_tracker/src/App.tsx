import React from "react";
import "./App.css";
import Header from "./components/Header";
import IncomeExpences from "./components/IncomeExpences";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
