import '../styles/globals.css'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { CounterProvider, CounterStoreContext } from '../stores/CounterStore';

const isServer = typeof window === 'undefined';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp