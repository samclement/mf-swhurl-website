import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'

export default props => {
  return (
    <div>
      <Head>
        <title>mf.swhurl.com</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <H1>mf.swhurl.com</H1>
      <p>Example next.js app, including:</p>
      <ul>
        <li>styled components</li>
        <li>jest snapshot testing</li>
      </ul>
    </div>
  )
}
