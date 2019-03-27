module.exports.parseProduct = html => {
  const start = html.indexOf('data-stl-json=')
  const tail = html.substring(start, html.length)
  const end = tail.indexOf('id="pdpShopTheLookJSONData"')
  const trimmed = tail.substring(tail.indexOf('\''), end).trim()
  const jsonStr = trimmed.substring(1, trimmed.length - 1)
  const product = JSON.parse(jsonStr)
  return product
}
