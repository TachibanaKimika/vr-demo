import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// export default MyApp

// !important without SSR
import dynamic from 'next/dynamic';

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});