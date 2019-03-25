import React from 'react'
import Link from '../../elements/Link'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  padding-right: 10px;
`

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
`

export default ({ items, gender }) => {
  return (
    <StyledNav>
      <StyledTitle>{gender}</StyledTitle>
      {items.map((item, i) => {
        const url = `/plp?url=${item.url}`
        return <Link key={i} href={url} as={item.url} label={item.name} />
      })}
    </StyledNav>
  )
}
