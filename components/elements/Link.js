import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: 'deeppink';
`

export default ({href, name}) => (
  <Link prefetch href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </Link>
)
