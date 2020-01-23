import App from 'next/app'
import Router from 'next/router'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body { font-family: Helvetica, Arial, sans-serif; }
  .touch { -webkit-overflow-scrolling: touch; }
  .no-scroll { position: fixed; }
`

export default class MyApp extends App {
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
