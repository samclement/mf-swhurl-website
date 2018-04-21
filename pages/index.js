import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav'

export default () => {
  return (
    <div>
      <Nav/>
      <H1>swhurl.com</H1>
      <p>Example next.js app, including:</p>
      <ul>
        <li>styled components</li>
        <li>jest snapshot testing</li>
      </ul>
    </div>
  )
}
