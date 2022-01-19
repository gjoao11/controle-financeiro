import styles from '../styles/Home.module.css';
import { NewTransaction } from '../components/NewTransaction';
import { TransactionsExtract } from '../components/TransactionsExtract';
import { Header } from '../components/Header';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isSideBardVisible, setIsSideBarVisible] = useState(false);

  function handleOpenSideBar() {
    setIsSideBarVisible(true);
  }

  function handleCloseSideBar() {
    setIsSideBarVisible(false);
  }

  return (
    <>
      <Header
        openSideBar={handleOpenSideBar}
      />

      <main className={styles.container}>
        <NewTransaction />

        <TransactionsExtract />
      </main>

      {isSideBardVisible && (
        <div className={styles.sideBar}>
          <button
            className={styles.closeSideBarButton}
            onClick={handleCloseSideBar}
          >
            <Image src="/close.svg" alt="close sidebar" width={16} height={16} />
          </button>

          <nav className={styles.sideBarNavigation}>
            <a href="#">Resumo</a>
            <a href="#">Dashboard</a>
            <a href="#">Configurações</a>
          </nav>
        </div>
      )}

      <footer className={styles.footer} />
    </>
  )
}
