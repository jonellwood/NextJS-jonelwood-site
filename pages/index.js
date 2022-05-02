import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jonellwod dot dev</title>
        <meta name="description" content="Generated by Jon Ellwood & create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to jonellwood.dev
        </h1>

        <p className={styles.description}>
          Error on {' '}
          <code className={styles.code}>pages/index.js</code>
          <br></br>
          Just kidding. Just showing off I can use a <code className={styles.code}>code tag</code>
        </p>

        <div className={styles.grid}>
          <a href="./Documentation" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Do a Full on Deep Dive 🤿 on Jon Ellwoods history and skills.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Placeholder &rarr;</h2>
            <p>I wish I had a cool page with games, quizzes, and prizes.... but I do not!</p>
          </a>

          <a
            href="./Projects"
            className={styles.card}
          >
            <h2>My Projects &rarr;</h2>
            <p>Discover and marvel at my projects (dont hold your breath)</p>
          </a>

          <a
            href="https://www.starwars.com/"
            className={styles.card}
          >
            <h2>Star Wars &rarr;</h2>
            <p>
             A long time ago in a galaxy far, far away... 
             <br></br>
             🚀 👾
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}