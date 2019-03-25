/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'
import data from '../../../test-data/activewear.json'
import { parseSearchResults } from '../../../lib/plp.js'
import FilterBlock from './index.js'

const facets = parseSearchResults(data).facets
const facet = facets[0]

describe('With Snapshot Testing', () => {
  it('FilterBlock displays items', () => {
    const wrapper = render(<FilterBlock title={facet.name} filters={facet.values} />)
    expect(wrapper).toMatchSnapshot()
  })
})
