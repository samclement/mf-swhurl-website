import React from 'react'
import Head from 'next/head'
import Header from '../blocks/Header'

function Mens(props) {
  const { gender } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Header gender={gender} />
    </div>
  )
}

Mens.getInitialProps = async ({ req, query }) => {
  return { gender: 'mens' }
}

export default Mens
