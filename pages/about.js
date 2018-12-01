import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>swhurl.com | About</title>
      </Head>
      <Nav />
      <H1>About</H1>
    </div>
  )
}
