import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: black;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    color: #f00;
  }
  &:visited {
    color: black;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`

export default ({ as, href, label }) => (
  <Link as={as} href={href} passHref>
    <StyledLink>{label}</StyledLink>
  </Link>
)
