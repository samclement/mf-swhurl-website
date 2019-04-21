import React from 'react'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getProduct } from '../services'
import GenderHeader from '../components/elements/GenderHeader.js'
import styled from 'styled-components'

const ImageContainer = styled.div`
  @media only screen and (min-width: 640px) {
    max-width: 320px;
  }
  @media only screen and (min-width: 800px) {
    max-width: 500px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 320px) {
    max-width: 320px;
  }
  @media only screen and (min-width: 640px) {
    margin-right: 50px;
  }
`

const StyledProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 640px) {
    flex-wrap: nowrap;
  }
`

const ProductDetailsContainer = styled.div`
  min-width: 320px;
`

function Pdp(props) {
  const { name, thumbnail, designerData, priceData, sizeTaxonomyName } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {name}</title>
      </Head>
      <Nav items={mens} gender="mens" />
      <Nav items={womens} gender="womens" />
      <GenderHeader gender={sizeTaxonomyName.split(' ')[0]} />
      <StyledProductContainer>
        <ImageContainer>
          <StyledImage
            src={thumbnail.replace('thumbnail', 'large')}
            alt={name}
          />
        </ImageContainer>
        <ProductDetailsContainer>
          <h2 dangerouslySetInnerHTML={{ __html: designerData.name }} />
          <h3 dangerouslySetInnerHTML={{ __html: name }} />
          <p dangerouslySetInnerHTML={{ __html: priceData.formattedValue }} />
        </ProductDetailsContainer>
      </StyledProductContainer>
    </div>
  )
}

Pdp.getInitialProps = async ({ req, query }) => {
  const q = req && req.query ? req.query : query
  const res = await getProduct(q, !!req)
  return res.data
}

export default Pdp
