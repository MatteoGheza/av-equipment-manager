import '../styles/sb-admin-2.scss'

import Head from 'next/head'
import { Nunito } from '@next/font/google'
import { SessionProvider } from "next-auth/react"
import { AppProps } from 'next/app'

const nunito = Nunito({
  weight: ['200','300','400','600','700','800','900'],
  subsets: ['latin'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    < >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
