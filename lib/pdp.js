const cheerio = require('cheerio')

module.exports.parseProduct = html => {
  const start = html.indexOf('data-stl-json=')
  const tail = html.substring(start, html.length)
  const end = tail.indexOf('id="pdpShopTheLookJSONData"')
  const trimmed = tail.substring(tail.indexOf('\''), end).trim()
  const jsonStr = trimmed.substring(1, trimmed.length - 1)
  let outfit = JSON.parse(jsonStr)
  let key = Object.keys(outfit)[0]
  let products = outfit[key].products
  let { product } = products.shift()
  product.description = getDescription(html)
  product.details = getDetails(html)
  product.sizeDetails = getSizeDetails(html)
  product.outfit = products
  console.log(JSON.stringify(products, null, 2))
  return product
}

function getDescription(html) {
  const $ = cheerio.load(html)
  return $('div.pdp-accordion__content').first().find('p').text().trim()
}

function getDetails (html) {
  const $ = cheerio.load(html)
  return $('div.pdp-accordion__content').eq(1).find('ul>li').toArray().map((i) => $(i).text().trim())
}

function getSizeDetails (html) {
  const $ = cheerio.load(html)
  return $('div.pdp-accordion__size-guide-measurement').next().eq(0).find('ul>li').toArray().map((i) => $(i).text().trim())
}
