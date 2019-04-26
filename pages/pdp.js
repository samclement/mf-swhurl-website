import React from 'react'
import Nav from '../components/blocks/Nav'
import Head from 'next/head'
import { mens, womens } from '../navigation.js'
import { getProduct } from '../services'
import GenderHeader from '../components/elements/GenderHeader.js'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'

const ImageContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 640px) {
    max-width: 320px;
  }
  @media only screen and (min-width: 641px) {
    width: 50%;
    max-width: 500px;
    padding-right: 20px;
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

const StyledProductContainer = styled.div`
  text-align: center;
`

const ProductDetailsContainer = styled.div`
  min-width: 320px;
`

const Controls = styled.div`
  margin-bottom: 20px;
`

function Pdp(props) {
  const { name, thumbnail, designerData, priceData, sizeTaxonomyName } = props
  let reactSwipeEl
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
          <ReactSwipe className="carousel" ref={el => (reactSwipeEl = el)}>
            {[...Array(5).keys()].map(num => {
              return (
                <div key={num}>
                  <StyledImage
                    src={thumbnail
                      .replace('thumbnail', 'large')
                      .replace('_1', `_${num + 1}`)}
                  />
                </div>
              )
            })}
          </ReactSwipe>
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
  const q = req && req.query ? req.query : query
  const res = await getProduct(q, !!req)
  return res.data
}

export default Pdp
