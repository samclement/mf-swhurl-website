import React from 'react'
import ProductListItem from '../components/blocks/ProductListItem'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getSearchResults } from '../services'
import styled from 'styled-components'

const ProductsList = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const StyledH1 = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0px;
`

function Plp (props) {
  const { gender, results } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <StyledH1>{gender}</StyledH1>
      <ProductsList>
        { results.map((item, i) => {
          return <ProductListItem key={i} item={item} />
        })}
      </ProductsList>
    </div>
  )
}

Plp.getInitialProps = async ({ req, query }) => {
  const q = req && req.query ? req.query : query
  const res = await getSearchResults(q, !!req)
  const { results } = res.data
  const gender = q.url.match(/\/mens/) ? 'mens' : 'womens'
  return { results, gender }
}

export default Plp
