import NavBar from '../components/navbar'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const showHeader = router.pathname === '/login' ? false : true

  return (
    <>
      {showHeader && <NavBar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
