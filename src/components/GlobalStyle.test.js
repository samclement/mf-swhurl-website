/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import GlobalStyle from './GlobalStyle.js'

describe('With Snapshot Testing', () => {
  it('Global Style', () => {
    render(<GlobalStyle />)
    const styleTags = document.head.getElementsByTagName('style')
    expect(styleTags).toMatchSnapshot()
  })
})
