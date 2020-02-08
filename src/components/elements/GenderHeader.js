import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0px;
  background-color: #eee;
`

export default props => {
  const { gender } = props
  return <StyledH2>{gender}</StyledH2>
}
