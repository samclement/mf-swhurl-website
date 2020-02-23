import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

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

const StyledPrice = styled.span`
  color: ${props => (props.item.previousPrice ? '#c00' : '#000')};
`

const PreviousPrice = styled.span`
  text-decoration: line-through;
`

const StyledLink = styled.a`
  color: #000;
  &:active {
    color: #666;
  }
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #ccc;
`

export default ({ item }) => {
  const imageUrl = `//assetsprx.matchesfashion.com/img/product/${item.code}_1_small.jpg`
  const url = `/pdp?code=${item.code}`
  return (
    <StyledProduct>
      <Link href={url} as={item.url}>
        <StyledLink aria-label={item.name}>
          <img src={imageUrl} alt={item.name} width="100%" />
          {item.name}
          <PriceContainer>
            <StyledPrice item={item}>
              &pound;{new Intl.NumberFormat().format(item.price)}
            </StyledPrice>
            {item.previousPrice ? (
              <React.Fragment>
                <span>&nbsp;</span>
                <PreviousPrice>
                  (&pound;{new Intl.NumberFormat().format(item.previousPrice)})
                </PreviousPrice>
              </React.Fragment>
            ) : (
              ''
            )}
          </PriceContainer>
        </StyledLink>
      </Link>
    </StyledProduct>
  )
}
