/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Index from './index.js'

describe('With Snapshot Testing', () => {
  it('Index page shows "swhurl.com" H1', () => {
      const wrapper = render(<Index/>)
      expect(wrapper).toMatchSnapshot()
    })
})

