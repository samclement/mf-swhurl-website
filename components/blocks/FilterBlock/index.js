import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledBlock = styled.div`
  width: 170px;
  padding: 10px;
`

const StyledLink = styled.a`
  color: black;
  font-size: 12px;
  text-decoration: none;
  display: block;
  padding-left: 10px;
  text-indent: -15px;
  margin-bottom: 6px;
  ::before {
    content: ${props =>
      props.selected
        ? 'url("/static/checkbox_checked.svg")'
        : 'url("/static/checkbox_unchecked.svg")'};
  }
`

export default ({ title, filters }) => {
  return (
    <StyledBlock>
      <h2>{title}</h2>
      {filters.map((f, i) => {
        const url = `/plp?url=${f.url}`
        return (
          <Link prefetch key={i} href={url} as={f.url}>
            <StyledLink href="#" selected={f.selected}>
              {f.name}
            </StyledLink>
          </Link>
        )
      })}
    </StyledBlock>
  )
}
