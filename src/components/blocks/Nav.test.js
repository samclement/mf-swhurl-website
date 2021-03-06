/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import Nav from './Nav.js'
// Data
import { mens } from '../navigation.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('Nav displays items', () => {
    const { asFragment } = render(<Nav items={mens} gender="mens" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
