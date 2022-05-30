import '../src/config/firebase.config'
import '../styles/globals.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AuthProvider } from '../src/hook/auth'
import AuthStateChanged from '../src/layout/AuthStateChanged'
import AppLayout from '../src/layout/AppLayout'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const showHeader = router.pathname === '/login' ? false : true

  return (
    <>
      <AuthProvider>
        <AppLayout>
          <AuthStateChanged>
            <Component {...pageProps} />
          </AuthStateChanged>
        </AppLayout>
      </AuthProvider>
    </>
  )
}

export default MyApp
