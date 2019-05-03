const parser = require('./plp.js')
const catLevel2Data = require('../../test-data/activewear.json')
const catLevel1Data = require('../../test-data/clothing.json')
const catLevel3Data = require('../../test-data/sports-jackets.json')

describe('PLP', () => {
  it('Should parse the navigation', () => {
    expect(parser.parseNavigation(catLevel1Data.level1CategoriesData)).toMatchSnapshot()
  })
  it('Should parse search results  for level 1 categories', () => {
    expect(parser.parseSearchResults(catLevel1Data)).toMatchSnapshot()
  })
  it('Should parse search results for level 2 categories', () => {
    expect(parser.parseSearchResults(catLevel2Data)).toMatchSnapshot()
  })
  it('Should parse search results for level 3 categories', () => {
    expect(parser.parseSearchResults(catLevel3Data)).toMatchSnapshot()
  })
})
