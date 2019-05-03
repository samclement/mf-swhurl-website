const axios = require('./axios')
export const setup = jest.fn(() => axios.default)
