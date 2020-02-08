/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import Mens from './Mens.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('Mens page renders correctly', () => {
    const { asFragment } = render(<Mens />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Mens getInitialProps', async () => {
    const res = await Mens.getInitialProps({})
    expect(res).toMatchSnapshot()
  })
})
