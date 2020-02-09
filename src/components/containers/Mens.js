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

function Mens(props) {
  const { gender } = props
  return (
    <div>
      <Head>
        <title>mf.swhurl.com | {gender}</title>
      </Head>
      <Header gender={gender} />
      <Container>
        <Link href="/plp?url=/mens/shop/clothing" as="/mens/shop/clothing">
          <a
            aria-label="SHOP MEN’S. Shop all men's items on Matchesfashion!"
            title="SHOP MEN’S"
            data-gender="mens"
          >
            <StyledImage
              alt="SHOP MEN’S. Shop all men's items on Matchesfashion!"
              src="//assets.matchesfashion.com/devTest/translated/2019/pre-home/launch/qa/published/img/hero/mens-desk.jpg?quality=60&amp;"
            />
          </a>
        </Link>
      </Container>
    </div>
  )
}

Mens.getInitialProps = async ({ req, query }) => {
  return { gender: 'mens' }
}

export default Mens
