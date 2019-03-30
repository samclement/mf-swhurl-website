/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'
import Pdp from './pdp.js'
const data = require('../test-data/pdp.json')

describe('With Snapshot Testing', () => {
  it('Plp page shows "mf.swhurl.com" H1', () => {
    const wrapper = render(<Pdp {...data} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Pdp.getInitialProps({ query: { code: 1247661 } })
    expect(res).toMatchSnapshot()
  })
  it('Plp getInitialProps', async () => {
    const res = await Pdp.getInitialProps({ req: { query: { code: 1247661 } } })
    expect(res).toMatchSnapshot()
  })
})
