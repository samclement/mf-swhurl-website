import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body { font-family: Helvetica, Arial, sans-serif; }
  .touch { -webkit-overflow-scrolling: touch; }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
