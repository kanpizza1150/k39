import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import * as Styled from '../styles/main'
import GlobalStyle, { darkTheme, lightTheme } from '../styles/globalStyled'
import '@fontsource/prompt'
import '@fontsource/prompt/700.css'
import Loading from '../container/Loading'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{pageProps?.header?.title || 'K39'}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icons/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Styled.Container>
          {/* <Styled.ThemeButton
            onClick={() => setIsDarkTheme((prev: boolean) => !prev)}
          >
            {isDarkTheme ? '🌙' : '🌝'}
          </Styled.ThemeButton> */}
          <Layout>
            {loading ? <Loading /> : <Component {...pageProps} />}
          </Layout>
        </Styled.Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
