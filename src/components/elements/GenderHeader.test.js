/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import GenderHeader from './GenderHeader.js'

describe('With Snapshot Testing', () => {
  it('H1 shows "mf.swhurl.com"', () => {
    const { asFragment } = render(<GenderHeader gender="test" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
