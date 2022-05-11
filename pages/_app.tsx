import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import MainMenu from '../components/menu';

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div style={{ padding: 100 }}>
        <h1>Next Event</h1>
        <MainMenu />
        <Component {...pageProps} />
      </div>
    </Web3ReactProvider>
  )
}

export default MyApp
