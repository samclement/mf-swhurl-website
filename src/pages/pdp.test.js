/* eslint-env jest */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import Pdp from './pdp.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter
// Snapshot diffing support
const { toMatchDiffSnapshot } = require('snapshot-diff')
expect.extend({ toMatchDiffSnapshot })
// Data
const data = require('../../test-data/pdp.json')

describe('With Snapshot Testing', () => {
  it('Plp page shows "mf.swhurl.com" H1', () => {
    const { getByText, asFragment } = render(<Pdp {...data} />)
    const firstRender = asFragment()
    expect(firstRender).toMatchSnapshot()
    fireEvent.click(getByText(/Next/i))
    expect(firstRender).toMatchDiffSnapshot(asFragment())
    fireEvent.click(getByText(/Previous/i))
    expect(firstRender).toMatchSnapshot(asFragment())
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
