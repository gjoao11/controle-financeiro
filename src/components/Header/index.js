import Image from 'next/image';
import styles from './styles.module.css';

export function Header({ openSideBar }) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/logo.svg" alt="Controle financeiro" width="40" height="36.84" />

        <h1 className={styles.pageTitle}>Controle financeiro</h1>

        <nav className={styles.headerNavigation}>
          <a href="#">Dashboard</a>
          <a href="#">Resumo</a>
          <a href="#">Configurações</a>
        </nav>

        <button
          className={styles.navigationButton}
          onClick={openSideBar}
        >
          <Image src="/menu.svg" alt="menu button" width={24} height={24} />
        </button>
      </div>
    </header>
  )
}
