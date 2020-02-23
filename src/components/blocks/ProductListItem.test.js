/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import ProductListItem from './ProductListItem.js'

describe('With Snapshot Testing', () => {
  it('Product list item', () => {
    const item = { code: 1, name: 'test', price: 10 }
    const { asFragment } = render(<ProductListItem item={item} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Product list item with sale price', () => {
    const item = { code: 1, name: 'test', price: 10, previousPrice: 20 }
    const { asFragment } = render(<ProductListItem item={item} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
