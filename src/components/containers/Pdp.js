import React from 'react'
import Head from 'next/head'
import Header from '../blocks/Header'
import { getProduct } from '../../services'
import GenderHeader from '../elements/GenderHeader.js'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'

const StyledProductContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 641px) {
    display: inline-block;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 641px) {
    width: 44%;
    display: inline-block;
    padding: 10px 3% 0 3%;
  }
  float: left;
`

const StyledImage = styled.img`
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 320px) {
    max-width: 320px;
  }
`

const ProductDetailsContainer = styled.div`
  @media only screen and (min-width: 641px) {
    width: 50%;
    display: inline-block;
  }
`

const Controls = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

function Pdp(props) {
  const { name, thumbnail, designerData, priceData, sizeTaxonomyName } = props
  const mainImage = thumbnail.replace('thumbnail', 'large')
  const gender = sizeTaxonomyName.split(' ')[0].toLowerCase()
  let reactSwipeEl
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {name}</title>
      </Head>
      <Header gender={gender} />
      <GenderHeader gender={gender} />
      <StyledProductContainer>
        <ImageContainer>
          <ReactSwipe className="carousel" ref={el => (reactSwipeEl = el)}>
            {[...Array(5).keys()].map(num => {
              return (
                <div key={num}>
                  <StyledImage
                    src={mainImage.replace('_1', `_${num + 1}`)}
                    alt={name}
                  />
                </div>
              )
            })}
          </ReactSwipe>
          <noscript>
            <img src={mainImage} />
          </noscript>
          <Controls>
            <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            <button onClick={() => reactSwipeEl.next()}>Next</button>
          </Controls>
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
  const res = await getProduct(query, !!req)
  return res.data
}

export default Pdp
