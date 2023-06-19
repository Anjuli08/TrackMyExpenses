import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpense';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
