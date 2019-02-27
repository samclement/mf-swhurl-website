import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { getMessage } from '../services'

function About (props) {
  const { message } = props
  return (
    <div>
      <Head>
        <title>swhurl.com | About</title>
      </Head>
      <Nav />
      <H1>About</H1>
      <p>{message}</p>
    </div>
  )
}

About.getInitialProps = async ({ req }) => {
  const json = await getMessage(req)
  return json
}

export default About
