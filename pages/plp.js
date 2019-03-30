import React from 'react'
import ProductListItem from '../components/blocks/ProductListItem'
import Nav from '../components/blocks/Nav'
import GenderHeader from '../components/elements/GenderHeader.js'
import FilterBlock from '../components/blocks/FilterBlock'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getSearchResults } from '../services'
import styled from 'styled-components'

const ProductsList = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const FilterBlockContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

function Plp (props) {
  const { gender, results, categoryFacets, facets } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <GenderHeader gender={gender} />
      <SearchContainer>
        <FilterBlockContainer>
          <FilterBlock title="Category" filters={categoryFacets} />
          { facets.map((f, i) => {
            return <FilterBlock key={i} title={f.name} filters={f.values} />
          })}
        </FilterBlockContainer>
        <ProductsList>
          { results.map((item, i) => {
            return <ProductListItem key={i} item={item} />
          })}
        </ProductsList>
      </SearchContainer>
    </div>
  )
}

Plp.getInitialProps = async ({ req, query }) => {
  const q = req && req.query ? req.query : query
  const res = await getSearchResults(q, !!req)
  const { results, categoryFacets, facets } = res.data
  const gender = q.url.match(/\/mens/) ? 'mens' : 'womens'
  return { results, gender, categoryFacets, facets }
}

export default Plp
