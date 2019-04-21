/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import FilterBlock from './index.js'
// Data
import data from '../../../test-data/activewear.json'
import { parseSearchResults } from '../../../lib/plp.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

const facets = parseSearchResults(data).facets
const facet = facets[0]

describe('With Snapshot Testing', () => {
  it('FilterBlock displays items', () => {
    const { asFragment } = render(<FilterBlock title={facet.name} filters={facet.values} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
