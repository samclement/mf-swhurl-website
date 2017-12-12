/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import H1 from './H1.js'

describe('With Enzyme', () => {
  it('H1 shows "swhurl.com"', () => {
      const wrapper = render(<H1>swhurl.com</H1>)
      expect(wrapper.text()).toEqual('swhurl.com')
    })
})

describe('With Snapshot Testing', () => {
  it('H1 shows "swhurl.com"', () => {
      const wrapper = render(<H1>shwurl.com</H1>).toJSON
      expect(toJson(wrapper)).toMatchSnapshot()
    })
})

