import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useCounterStore } from '../stores/CounterStore'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
function Home() {

  const counterStore = useCounterStore()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <button onClick={() => { counterStore.count++ }} >{counterStore.count}</button>
          <br/>
          <br/>
          <button onClick={() => { counterStore.addCount() }} >Add</button>
          <br/>
          <br/>
          <button onClick={() => { counterStore.removeCount() }} >Subtract</button>
          <br/>
          <br/>
          <br/>
          <Link href="/about"><a>About</a></Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


export default observer(Home)