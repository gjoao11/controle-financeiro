import { createContext, useContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext({});

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const recoveredTransactions = localStorage.getItem('transactions')
    if (recoveredTransactions) {
      setTransactions(JSON.parse(recoveredTransactions))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions])

  function createTransaction({ type, name, value }) {
    setTransactions([...transactions, { type, name, value, id: transactions.length + 1 }]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
