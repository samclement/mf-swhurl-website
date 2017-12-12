/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Nav from './index.js'

describe('With Snapshot Testing', () => {
  it('Nav has 3 sections', () => {
      const wrapper = render(<Nav/>)
      expect(wrapper).toMatchSnapshot()
    })
})

