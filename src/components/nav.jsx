import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Nav = () => (
  <header className={styles.container}>
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home Page</a>
      </Link>

      <Link href="/Documentation">
        <a>Docs</a>
      </Link>

      
    </nav>
  </header>
)

export default Nav