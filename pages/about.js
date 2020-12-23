import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useCounterStore } from '../stores/CounterStore'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function About() {

    const counterStore = useCounterStore()

    return (
        <div className={styles.container}>
            <Head>
                <title>About Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/"><a>Home</a></Link>
            <br/><br/>
            <button onClick={() => { counterStore.count++ }} >{counterStore.count}</button>
            <br/><br/>
            <button onClick={() => { counterStore.addCount() }} >Add</button>
            <br/><br/>
            <button onClick={() => { counterStore.removeCount() }} >Subtract</button>
        </div>
    )
}


export default observer(About)