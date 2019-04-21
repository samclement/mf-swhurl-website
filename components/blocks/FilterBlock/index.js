import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledBlock = styled.div`
  width: 170px;
  padding: 10px;
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
  cursor: pointer;
`

const StyledLabel = styled.label`
  cursor: pointer;
`

export default ({ title, filters }) => {
  return (
    <StyledBlock>
      <h2>{title}</h2>
      {filters.map((f, i) => {
        const url = `/plp?url=${f.url}`
        return (
          <Link prefetch key={i} href={url} as={f.url}>
            <StyledLink href="#">
              <StyledLabel>
                <StyledInput type="checkbox" readOnly checked={f.selected} />{' '}
                {f.name}
              </StyledLabel>
            </StyledLink>
          </Link>
        )
      })}
    </StyledBlock>
  )
}
