import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpense';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
