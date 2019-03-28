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
  display: block;
  padding-left: 15px;
  text-indent: -15px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 13px;
  height: 13px;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  position: relative;
  top: -1px;
  *overflow: hidden;
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
              <Link prefetch key={i} href={url} as={f.url}>
                <StyledLink href="#">
                  <label>
                    <StyledInput type="checkbox" readOnly checked={f.selected} /> {f.name}
                  </label>
                </StyledLink>
              </Link>
            </StyledLi>
          )
        })}
      </StyledList>
    </StyledBlock>
  )
}
