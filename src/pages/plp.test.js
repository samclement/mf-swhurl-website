/* eslint-env jest */

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import Plp from './plp.js'
import { parseSearchResults } from '../lib/plp.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter
// Snapshot diffing support
const { toMatchDiffSnapshot } = require('snapshot-diff')
expect.extend({ toMatchDiffSnapshot })
// Data
const data = require('../../test-data/activewear.json')
const parsed = parseSearchResults(data)
const results = parsed.results
const facets = parsed.facets
const categoryFacets = parsed.categoryFacets

describe('With Snapshot Testing', () => {
  it('Plp - show filters button', () => {
    const r = { gender: 'mens', results, facets, categoryFacets }
    const { getByText, asFragment, container } = render(
      <Plp
        results={r.results}
        gender={r.gender}
        facets={facets}
        categoryFacets={categoryFacets}
      />
    )
    const overlay = container.querySelector('.cheeseburger-menu-overlay')
    const firstRender = asFragment()
    expect(asFragment()).toMatchSnapshot()
    fireEvent.click(getByText(/Show filters/i))
    expect(firstRender).toMatchDiffSnapshot(asFragment())
    fireEvent.click(overlay)
    expect(asFragment()).toMatchSnapshot(firstRender)
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({ query: { url: '/mens/' } })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({
      req: { query: { url: '/womens/' } }
    })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({ req: { query: { url: '/mens/' } } })
    expect(res).toMatchSnapshot()
  })
})
