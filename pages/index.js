import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>mf.swhurl.com</title>
      </Head>
      <Nav />
      <H1>mf.swhurl.com</H1>
      <p>Example next.js app, including:</p>
      <ul>
        <li>styled components</li>
        <li>jest snapshot testing</li>
      </ul>
    </div>
  )
}
