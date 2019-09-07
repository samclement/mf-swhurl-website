/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import H1 from './H1.js'

describe('With Snapshot Testing', () => {
  it('H1 shows "mf.swhurl.com"', () => {
    const { asFragment } = render(<H1>mf.shwurl.com</H1>)
    expect(asFragment()).toMatchSnapshot()
  })
})
