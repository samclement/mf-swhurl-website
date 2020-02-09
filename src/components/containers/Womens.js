import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../blocks/Header'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const StyledImage = styled.img`
  width: 100%;
`

function Womens(props) {
  const { gender } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Header gender={gender} />
      <Container>
        <Link href="/plp?url=/womens/shop/clothing" as="/womens/shop/clothing">
          <a
            aria-label="SHOP WOMEN’S. Shop all women's items on Matchesfashion!"
            title="SHOP WOMEN’S"
            data-gender="womens"
          >
            <StyledImage
              alt="SHOP WOMEN’S. Shop all women's items on Matchesfashion!"
              src="//assets.matchesfashion.com/devTest/translated/2019/pre-home/launch/qa/published/img/hero/womens-desk.jpg?quality=60&amp;"
            />
          </a>
        </Link>
      </Container>
    </div>
  )
}

Womens.getInitialProps = async ({ req, query }) => {
  return { gender: 'womens' }
}

export default Womens
