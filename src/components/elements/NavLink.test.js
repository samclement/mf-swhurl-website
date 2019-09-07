import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import NavLink from './NavLink.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('NavLink shows "About" with href "/about"', () => {
    const { asFragment } = render(<NavLink href="/about" name="About" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
