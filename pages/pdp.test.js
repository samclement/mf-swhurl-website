/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import Pdp from './pdp.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter
// Data
const data = require('../test-data/pdp.json')

describe('With Snapshot Testing', () => {
  it('Plp page shows "mf.swhurl.com" H1', () => {
    const { asFragment } = render(<Pdp {...data} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Pdp.getInitialProps({ query: { code: 1247661 } })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Pdp.getInitialProps({ req: { query: { code: 1247661 } } })
    expect(res).toMatchSnapshot()
  })
})
