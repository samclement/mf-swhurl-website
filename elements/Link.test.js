/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Link from './Link.js'

describe('With Snapshot Testing', () => {
  it('Link shows "About" with href "/about"', () => {
      const wrapper = render(<Link href="/about" name="About"/>)
      expect(wrapper).toMatchSnapshot()
    })
})

