import { getApiUrl, getNav, getSearchResults } from './'
import axios from 'axios'
const data = require('../test-data/activewear.json')
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
    axios.mockReturnValue(Promise.resolve(data))
    const res = await getNav()
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toMatchSnapshot()
  })
  it('Should get search results', async () => {
    axios.mockReturnValue(Promise.resolve(data))
    const res = await getSearchResults('', true)
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toMatchSnapshot()
  })
})
