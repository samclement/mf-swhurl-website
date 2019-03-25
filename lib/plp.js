module.exports.parseNavigation = navigation => {
  return navigation.map(item => {
    const { name, url } = item
    return { name, url }
  })
}

module.exports.parseSearchResults = searchResults => {
  return {
    categoryFacets: parseCategoryFacets(searchResults.categoryNavData),
    facets: parseFacets(searchResults.facets),
    results: parseResults(searchResults.results)
  }
}

function parseResults(results) {
  return results.map(parseProductResult)
}

function parseCategoryFacets(cFacets) {
  return cFacets.map(parseCategoryFacet)
}

function parseFacets(facets) {
  return facets
    .filter(facet => {
      return (
        facet.code === 'allDesigners' ||
        facet.code === 'refinementColour' ||
        facet.code === 'clothesSize'
      )
    })
    .map(parseFacet)
}

function parseCategoryFacet(cFacet) {
  const parsed = {
    name: cFacet.name,
    isSelected: cFacet.active,
    url: cFacet.url,
    categories: []
  }
  if (cFacet.active && cFacet.categories) {
    parsed.categories = cFacet.categories.map(parseCategoryFacet)
  }
  return parsed
}

function parseFacet(facet) {
  return {
    name: facet.name,
    values: facet.values.map(parseFacetValue)
  }
}

function parseFacetValue(facetValue) {
  return {
    name: facetValue.name,
    url: facetValue.query.url
  }
}

function parseProductResult(product) {
  return {
    name: product.name,
    url: product.url,
    code: product.code,
    price: product.price.value,
    imageCount: product.galleryImageMaps.length,
    sizes: product.sizeList.map(size => {
      return parseSize(size)
    })
  }
}

function parseSize(size) {
  return {
    code: size.code,
    baseCode: size.baseCode,
    description: size.value,
    inStock: size.available
  }
}
