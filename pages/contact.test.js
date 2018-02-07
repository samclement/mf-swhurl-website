/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'
import 'jest-styled-components'

import Contact from './contact.js'

describe('With Snapshot Testing', () => {
  it('Contact page shows "Contact" H1', () => {
      const wrapper = render(<Contact/>)
      expect(wrapper).toMatchSnapshot()
    })
})

