/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import Login from './login.js'

describe('With Snapshot Testing', () => {
  it('Login page shows "Login" H1', () => {
    const wrapper = render(<Login />)
    expect(wrapper).toMatchSnapshot()
  })
})
