/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import H1 from './H1.js'

describe('With Snapshot Testing', () => {
  it('H1 shows "mf.swhurl.com"', () => {
    const wrapper = shallow(<H1>mf.shwurl.com</H1>)
    expect(wrapper).toMatchSnapshot()
  })
})
