/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'
import { mens } from '../../../navigation.js'

import Nav from './index.js'

describe('With Snapshot Testing', () => {
  it('Nav displays items', () => {
    const wrapper = render(<Nav items={mens} gender="mens" />)
    expect(wrapper).toMatchSnapshot()
  })
})
