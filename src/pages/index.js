import React from 'react'
import H1 from '../components/elements/H1.js'
import Nav from '../components/blocks/Nav.js'
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
        <li>nextjs (server-side rendering single-page application)</li>
        <li>styled-compoenents</li>
        <li>linting with eslint</li>
        <li>jest snapshot testing</li>
        <li>prettier formatting</li>
        <li>lighthouse performance testing</li>
        <li>chrome browser testing (wdio)</li>
        <li>greenkeeper (automatic PRs for upgrading dependencies)</li>
        <li>kustomize (k8s deployment configuration)</li>
      </ul>
      <p>The application is deployed to a k8s cluster that includes:</p>
      <ul>
        <li>
          cert-manager (automatic TLS certificate provisioning from LetsEncript)
        </li>
        <li>oauth2-proxy (authentication against github)</li>
        <li>prometheus (infrastructure and applicaiton monitoring)</li>
        <li>fluentbit / loggly integration (log aggregation)</li>
      </ul>
    </div>
  )
}
