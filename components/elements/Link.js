import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: darkgray;
  &:hover {
    color: #F00;
  }
  &:visited {
    color: darkgray;
  }
`

export default ({ href, label }) => (
  <Link prefetch href={href} passHref>
    <StyledLink>{label}</StyledLink>
  </Link>
)
