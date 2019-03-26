import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import NavLink from './NavLink.js'

describe('With Snapshot Testing', () => {
  it('NavLink shows "About" with href "/about"', () => {
    const wrapper = render(<NavLink href="/about" name="About" />)
    expect(wrapper).toMatchSnapshot()
  })
})
