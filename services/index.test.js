import { getApiUrl, getNav, getSearchResults, getProduct } from './'
import axios from 'axios'
const fs = require('fs')
const path = require('path')
const plp = require('../test-data/activewear.json')
const pdp = fs.readFileSync(path.resolve('./test-data/pdp.html'), 'utf8')
jest.mock('axios')

describe('getApiUrl', () => {
  it('Should get local API URL', () => {
    expect(getApiUrl(true)).toMatchSnapshot()
  })
  it('Should get hostname API URL', () => {
    expect(getApiUrl(false)).toMatchSnapshot()
  })
  it('Should get local API URL by default', () => {
    expect(getApiUrl()).toMatchSnapshot()
  })
})

describe('API calls', () => {
  beforeEach(() => {
    axios.mockReset()
  })
  it('Should get nav', async () => {
    axios.mockReturnValue(Promise.resolve(plp))
    const res = await getNav()
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toMatchSnapshot()
  })
  it('Should get search results', async () => {
    axios.mockReturnValue(Promise.resolve(plp))
    const res = await getSearchResults('', true)
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toMatchSnapshot()
  })
  it('Should get product', async () => {
    axios.mockReturnValue(Promise.resolve(pdp))
    const res = await getProduct('', true)
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toMatchSnapshot()
  })
})
