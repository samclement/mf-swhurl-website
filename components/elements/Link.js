import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: 'deeppink';
`

 export default ({href, label}) => (
  <Link prefetch href={href} passHref>
    <StyledLink>{label}</StyledLink>
  </Link>
)
