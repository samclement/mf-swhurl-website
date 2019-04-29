import React, { useState, useEffect } from 'react'
import ProductListItem from '../components/blocks/ProductListItem'
import Nav from '../components/blocks/Nav'
import GenderHeader from '../components/elements/GenderHeader.js'
import FilterBlock from '../components/blocks/FilterBlock'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getSearchResults } from '../services'
import styled from 'styled-components'
import CheeseburgerMenu from 'cheeseburger-menu'

const ProductsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const FilterBlockContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const DesktopFilterBlockContainer = styled(FilterBlockContainer)`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const FilterButton = styled.button`
  @media only screen and (min-width: 640px) {
    display: none;
  }
`

function Plp(props) {
  const { gender, results, categoryFacets, facets } = props
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  })
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <GenderHeader gender={gender} />
      <FilterButton onClick={() => setMenuOpen(!menuOpen)}>
        Show Filters
      </FilterButton>
      <SearchContainer>
        <CheeseburgerMenu
          isOpen={menuOpen}
          width={220}
          innerClassName="touch"
          closeCallback={() => setMenuOpen(false)}
        >
          <FilterBlockContainer>
            <FilterBlock title="Category" filters={categoryFacets} />
            {facets.map((f, i) => {
              return <FilterBlock key={i} title={f.name} filters={f.values} />
            })}
          </FilterBlockContainer>
        </CheeseburgerMenu>
        <DesktopFilterBlockContainer>
          <FilterBlock title="Category" filters={categoryFacets} />
          {facets.map((f, i) => {
            return <FilterBlock key={i} title={f.name} filters={f.values} />
          })}
        </DesktopFilterBlockContainer>
        <ProductsList>
          {results.map((item, i) => {
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
