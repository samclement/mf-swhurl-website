import React from 'react'
import FilterBlock from './FilterBlock.js'
import data from '../../../test/data/activewear.json'
import { parseSearchResults } from '../../lib/parser.js'

const facets = parseSearchResults(data).facets
const designers = facets[0]
const colours = facets[2]

export default { title: 'FilterBlock' }

export const withScroll = () => (
  <FilterBlock title={designers.name} filters={designers.values} scrollable />
)

export const withoutScroll = () => (
  <FilterBlock title={colours.name} filters={colours.values} />
)
