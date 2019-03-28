import React from 'react'
import styled from 'styled-components'

const StyledProduct = styled.div`
  width: 150px;
  padding: 10px;
  text-align: center;
`

export default ({ item }) => {
  const imageUrl = `//assetsprx.matchesfashion.com/img/product/${item.code}_1_small.jpg`
  return (
    <StyledProduct>
      <img src={imageUrl} alt={item.name} />
      {item.name}
    </StyledProduct>
  )
}
