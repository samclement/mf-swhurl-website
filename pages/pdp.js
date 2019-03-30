import React from 'react'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getProduct } from '../services'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 510px;
`

function Pdp(props) {
  const { name, thumbnail, designerData, priceData } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {name}</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <h1 dangerouslySetInnerHTML={{ __html: designerData.name }} />
      <h2 dangerouslySetInnerHTML={{ __html: name }} />
      <p dangerouslySetInnerHTML={{ __html: priceData.formattedValue }} />
      <ImageContainer>
        <StyledImage src={thumbnail.replace('thumbnail', 'large')} alt={name} />
      </ImageContainer>
    </div>
  )
}

Pdp.getInitialProps = async ({ req, query }) => {
  const q = req && req.query ? req.query : query
  const res = await getProduct(q, !!req)
  return res.data
}

export default Pdp
