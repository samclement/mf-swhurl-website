import { getApiUrl, getMessage } from './'

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

describe('getMessage', () => {
  it('Should get remote message', async () => {
    expect(await getMessage()).toMatchSnapshot()
  })
})
