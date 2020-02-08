/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import Womens from './Womens.js'
// Nextjs routing support
import Router from 'next/router'
const mockedRouter = { push: () => {} }
Router.router = mockedRouter

describe('With Snapshot Testing', () => {
  it('Womens page shows "Womens" H1', () => {
    const { asFragment } = render(<Womens />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Womens getInitialProps', async () => {
    const res = await Womens.getInitialProps({})
    expect(res).toMatchSnapshot()
  })
})
