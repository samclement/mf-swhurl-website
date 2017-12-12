/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'

import About from './about.js'

describe('With Snapshot Testing', () => {
  it('About page shows "About" H1', () => {
      const wrapper = render(<About/>)
      expect(wrapper).toMatchSnapshot()
    })
})

