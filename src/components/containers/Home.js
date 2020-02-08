import React from 'react'
import Head from 'next/head'
import Header from '../blocks/Header'

export default props => {
  return (
    <div>
      <Head>
        <title>mf.swhurl.com</title>
      </Head>
      <Header />
      <h2>mf.swhurl.com</h2>
      <p>Example next.js app, including:</p>
      <ul>
        <li>nextjs (server-side rendering single-page application)</li>
        <li>styled-components</li>
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
