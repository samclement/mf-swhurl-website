import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: black;
  padding-right: 5px;
  &:hover {
    color: #f00;
  }
  &:visited {
    color: black;
  }
`

export default ({ as, href, label }) => (
  <Link prefetch as={as} href={href} passHref>
    <StyledLink>{label}</StyledLink>
  </Link>
)
