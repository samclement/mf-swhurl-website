import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledProduct = styled.div`
  width: 150px;
  padding: 10px;
  text-align: center;
`

export default ({ item }) => {
  const imageUrl = `//assetsprx.matchesfashion.com/img/product/${item.code}_1_small.jpg`
  const url = `/pdp?code=${item.code}`
  return (
    <StyledProduct>
      <Link href={url} as={item.url}>
        <a>
          <img src={imageUrl} alt={item.name} />
        </a>
      </Link>
      {item.name}
    </StyledProduct>
  )
}
