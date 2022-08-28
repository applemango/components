import './styles/globals.scss'
import type { AppProps } from 'next/app'

import Mouse from '../components/other/mouse'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
