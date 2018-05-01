import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import Link from './Link.js'

describe('With Snapshot Testing', () => {
  it('Link shows "About" with href "/about"', () => {
    const wrapper = render(<Link href="/about" name="About" />)
    expect(wrapper).toMatchSnapshot()
  })
})
