import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load'

const StyledProduct = styled.div`
  width: 150px;
  min-height: 220px;
  padding: 10px;
  text-align: center;
  margin: 0;
  @media only screen and (min-width: 380px) and (max-width: 640px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 641px) and (max-width: 780px) {
    padding: 10px 5px;
    margin: 0;
  }
`

export default ({ item }) => {
  const imageUrl = `//assetsprx.matchesfashion.com/img/product/${
    item.code
  }_1_small.jpg`
  const url = `/pdp?code=${item.code}`
  return (
    <StyledProduct>
      <Link href={url} as={item.url}>
        <a aria-label={item.name}>
          <LazyLoad offsetVertical={500}>
            <img src={imageUrl} alt={item.name} width="100%" />
          </LazyLoad>
        </a>
      </Link>
      {item.name}
    </StyledProduct>
  )
}
