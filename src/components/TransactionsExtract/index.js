import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import styles from './styles.module.css';

export function TransactionsExtract() {
  const { transactions } = useTransactions();
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(
      transactions.reduce((acc, cur) => {
        if (cur.type === 'buy') {
          return acc - Number(cur.value)
        }

        return acc + Number(cur.value)
      }, 0)
    )
  }, [transactions])

  return (
    <section className={styles.transactionExtractContainer}>
      <h2 className={styles.sectionTitle}>Extrato de transações</h2>

      <div className={styles.contentContainer}>
        <table>
          <thead>
            <tr>
              <th />
              <th>Mercadoria</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  {transaction.type === 'buy' ? '- ' : '+ '}
                </td>
                <td>
                  {transaction.name}
                </td>
                <td>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.value)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th />
              <th>Total</th>
              <th>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalValue)}
              </th>
            </tr>
          </tfoot>
        </table>
        <spam>{totalValue <= 0 ? '[PREJUÍZO]' : '[LUCRO]'}</spam>
      </div>
    </section>

  )
}
