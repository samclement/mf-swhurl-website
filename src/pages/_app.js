import App from 'next/app'
import Router from 'next/router'
import React from 'react'
import withGA from 'next-ga'
import GlobalStyle from '../components/GlobalStyle'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  componentDidMount() {
    const cachedPageHeight = []
    const html = document.querySelector('html')

    Router.events.on('routeChangeStart', () => {
      cachedPageHeight.push(document.documentElement.offsetHeight)
    })

    Router.events.on('routeChangeComplete', () => {
      html.style.height = 'initial'
    })

    Router.beforePopState(() => {
      html.style.height = `${cachedPageHeight.pop()}px`

      return true
    })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

function getGaCode() {
  const IS_BROWSER = typeof window !== 'undefined'
  const BASE_GA_CODE = `UA-158914730`
  const GA_PROPERTY =
    IS_BROWSER && window.location.hostname === 'staging.mf.swhurl.com'
      ? '1'
      : '2'
  return `${BASE_GA_CODE}-${GA_PROPERTY}`
}

export default withGA(getGaCode(), Router)(MyApp)
