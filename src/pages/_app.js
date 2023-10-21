import { LojaProvider } from '@/contexts/LojaContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <LojaProvider>
      <Component {...pageProps} />
    </LojaProvider>
  )
}
