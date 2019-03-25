/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import ProductListItem from './index.js'

describe('With Snapshot Testing', () => {
  it('Product list item', () => {
    const item = { code: 1, name: 'test' }
    const wrapper = render(<ProductListItem item={item} />)
    expect(wrapper).toMatchSnapshot()
  })
})
