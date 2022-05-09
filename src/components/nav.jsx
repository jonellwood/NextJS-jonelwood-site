import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Nav = () => (
  <header className={styles.container}>
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      
      <a target="_blank" href="https://twitter.com/thejonellwood" rel="noopener noreferrer">Twitter</a>
      <a target="_blank" href="https://github.com/jonellwood" rel="noopener noreferrer">GitHub</a>

      
    </nav>
    <p className={styles.smallText}>Note: Some link are external and will take you away from jonellwood.dev</p>
  </header>
)

export default Nav