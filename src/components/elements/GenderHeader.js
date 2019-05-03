import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0px;
  background-color: #eee;
`

export default props => {
  const { gender } = props
  return <StyledH1>{gender}</StyledH1>
}
