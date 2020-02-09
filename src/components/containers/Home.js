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

const StyledLink = styled.a`
  width: 50%;
`

export default props => {
  return (
    <div>
      <Head>
        <title>mf.swhurl.com</title>
      </Head>
      <Header />
      <Container>
        <Link href="/mens">
          <StyledLink href="/mens" aria-label="SHOP MEN’S. Shop all men's items on Matchesfashion!" title="SHOP MEN’S" data-gender="mens">
            <StyledImage alt="SHOP MEN’S. Shop all men's items on Matchesfashion!" src="//assets.matchesfashion.com/devTest/translated/2019/pre-home/launch/qa/published/img/hero/mens-desk.jpg?quality=60&amp;" />
          </StyledLink>
        </Link>
        <Link href="/womens">
          <StyledLink href="/womens" aria-label="SHOP WOMEN’S. Shop all women's items on Matchesfashion!" title="SHOP WOMEN’S" data-gender="womens">
            <StyledImage alt="SHOP WOMEN’S. Shop all women's items on Matchesfashion!" src="//assets.matchesfashion.com/devTest/translated/2019/pre-home/launch/qa/published/img/hero/womens-desk.jpg?quality=60&amp;" />
          </StyledLink>
        </Link>
      </Container>
    </div>
  )
}
