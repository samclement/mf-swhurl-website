const parser = require('./pdp.js')
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve('./test-data/pdp.html'), 'utf8')

describe('PLP', () => {
  it('Should parse the navigation', () => {
    expect(parser.parseProduct(html)).toMatchSnapshot()
  })
})
