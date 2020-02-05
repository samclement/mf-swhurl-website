import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledBlock = styled.div`
  width: 210px;
  padding: 10px;
`

const StyledFilters = styled.div`
  max-height: ${props => (props.scrollable ? '420px' : 'initial')};
  overflow-y: ${props => (props.scrollable ? 'auto' : 'initial')};
  border: ${props => (props.scrollable ? '1px solid #ccc' : 'initial')};
  padding: ${props => (props.scrollable ? '5px 9px' : 'initial')};
`

const StyledLink = styled.a`
  color: black;
  font-size: 13px;
  text-decoration: none;
  display: block;
  padding-left: 10px;
  text-indent: -15px;
  margin-bottom: 6px;
  ::before {
    content: ${props =>
      props.selected
        ? 'url("/checkbox_checked.svg")'
        : 'url("/checkbox_unchecked.svg")'};
    position: relative;
    bottom: -2px;
  }
`

export default ({ title, filters, scrollable }) => {
  return (
    <StyledBlock>
      <h2>{title}</h2>
      <StyledFilters scrollable={scrollable}>
        {filters.map((f, i) => {
          const url = `/plp?url=${f.url}`
          return (
            <Link key={i} href={url} as={f.url}>
              <StyledLink href={f.url} selected={f.selected}>
                {f.name}
              </StyledLink>
            </Link>
          )
        })}
      </StyledFilters>
    </StyledBlock>
  )
}
