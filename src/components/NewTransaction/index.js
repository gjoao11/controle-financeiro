import { useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import styles from './styles.module.css';

export function NewTransaction() {
  const [type, setType] = useState('buy');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const { createTransaction } = useTransactions();

  function handleCreateTransaction(event) {
    event.preventDefault();

    createTransaction({ type, name, value })
  }

  return (
    <section className={styles.newTransactionContainer}>
      <h2 className={styles.sectionTitle}>Nova transação</h2>

      <form className={styles.transactionForm}>
        <label>
          <span> Tipo de transação</span>
          <select
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <option value="buy">Compra</option>
            <option value="sell">Venda</option>
          </select>
        </label>

        <label>
          <span> Nome da mercadoria</span>
          <input
            type="text"
            placeholder="Input"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>

        <label>
          <span> Valor</span>
          <input
            type="number"
            placeholder="R$ 0,00"
            required
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>

        <button
          type="submit"
          className={styles.transactionButton}
          onClick={handleCreateTransaction}
        >
          Adicionar transação
        </button>
      </form>
    </section>
  )
}
