/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import ProductListItem from './ProductListItem.js'

describe('With Snapshot Testing', () => {
  it('Product list item', () => {
    const item = { code: 1, name: 'test' }
    const { asFragment } = render(<ProductListItem item={item} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
