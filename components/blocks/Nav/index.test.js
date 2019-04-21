/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import Nav from './index.js'
// Data
import { mens } from '../../../navigation.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('Nav displays items', () => {
    const { asFragment } = render(<Nav items={mens} gender="mens" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
