/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import Index from './index.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('Index page shows "mf.swhurl.com" H1', () => {
    const { asFragment } = render(<Index />)
    expect(asFragment()).toMatchSnapshot()
  })
})
