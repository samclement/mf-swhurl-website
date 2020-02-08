import React from 'react'
import Head from 'next/head'
import Header from '../blocks/Header'
import GenderHeader from '../elements/GenderHeader.js'

function Mens(props) {
  const { gender } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Header gender={gender} />
      <GenderHeader gender={gender} />
    </div>
  )
}

Mens.getInitialProps = async ({ req, query }) => {
  return { gender: 'mens' }
}

export default Mens
