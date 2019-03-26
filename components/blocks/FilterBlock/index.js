import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledBlock = styled.div`
  width: 170px;
  padding: 10px;
`

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`

const StyledLi = styled.li`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`

const StyledLink = styled.a`
  color: black;
  font-size: 11px;
  text-decoration: none;
`

export default ({ title, filters }) => {
  return (
    <StyledBlock>
      <h2>{title}</h2>
      <StyledList>
        {filters.map((f, i) => {
          const url = `/plp?url=${f.url}`
          return (
            <StyledLi key={i}>
              <Link key={i} href={url} as={f.url}>
                <StyledLink href="#"><input type="checkbox" readOnly checked={f.selected} /> {f.name}</StyledLink>
              </Link>
            </StyledLi>
          )
        })}
      </StyledList>
    </StyledBlock>
  )
}
