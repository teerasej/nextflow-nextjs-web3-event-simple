import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import MainMenu from '../components/menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: 100 }}>
      <h1>Next Event</h1>
      <MainMenu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
