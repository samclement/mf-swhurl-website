import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
  }
`
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>swhurl.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="swhurl.com website." />
          <link rel="icon" type="images/x-icon" href="/static/favicon.ico" />
          <GlobalStyle />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
