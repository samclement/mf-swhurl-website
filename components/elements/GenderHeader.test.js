/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import GenderHeader from './GenderHeader.js'

describe('With Snapshot Testing', () => {
  it('H1 shows "mf.swhurl.com"', () => {
    const wrapper = shallow(<GenderHeader gender="test" />)
    expect(wrapper).toMatchSnapshot()
  })
})
