import React from 'react'
import Head from 'next/head'
import Header from '../blocks/Header'

function Womens(props) {
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

Womens.getInitialProps = async ({ req, query }) => {
  return { gender: 'womens' }
}

export default Womens
