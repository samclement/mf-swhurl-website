/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import FilterBlock from './FilterBlock.js'
// Data
import data from '../../../test-data/activewear.json'
import { parseSearchResults } from '../../lib/parser.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {} }
Router.router = mockedRouter

const facets = parseSearchResults(data).facets
const facet = facets[0]

describe('With Snapshot Testing', () => {
  it('FilterBlock displays items', () => {
    const { asFragment } = render(
      <FilterBlock title={facet.name} filters={facet.values} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
