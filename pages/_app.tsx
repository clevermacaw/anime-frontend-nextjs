import { Suspense } from 'react'
import Loader from 'components/loader'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/anime.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...pageProps} />
    </Suspense>
  )
}

export default MyApp
