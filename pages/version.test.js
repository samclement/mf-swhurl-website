/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Version from './version.js'

describe('With Snapshot Testing', () => {
  it('Version page shows correct "version"', () => {
      const wrapper = shallow(<Version/>)
      expect(wrapper).toMatchSnapshot()
    })
})


