import { TransactionsProvider } from '../hooks/useTransactions'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
    </TransactionsProvider>
  )
}

export default MyApp
