/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'
import Plp from './plp.js'
import { parseSearchResults } from '../lib/plp.js'
const data = require('../test-data/activewear.json')
const parsed = parseSearchResults(data)
const results = parsed.results
const facets = parsed.facets
const categoryFacets = parsed.categoryFacets

describe('With Snapshot Testing', () => {
  it('Plp page shows "mf.swhurl.com" H1', () => {
    const r = { gender: 'mens', results, facets, categoryFacets }
    const wrapper = render(<Plp results={r.results} gender={r.gender} facets={facets} categoryFacets={categoryFacets} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({ query: { url: '/mens/' } })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({ req: { query: { url: '/womens/' } } })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Plp.getInitialProps({ req: { query: { url: '/mens/' } } })
    expect(res).toMatchSnapshot()
  })
})
