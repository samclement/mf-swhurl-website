/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import Nav from './index.js'

describe('With Snapshot Testing', () => {
  it('Nav has 3 sections', () => {
    const wrapper = render(<Nav />)
    expect(wrapper).toMatchSnapshot()
  })
})
