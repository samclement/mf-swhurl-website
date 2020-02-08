import React from 'react'
import NavLink from '../elements/NavLink'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-weight: bold;
  text-transform: capitalize;
`

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export default ({ items, gender }) => {
  return (
    <StyledNav>
      <StyledTitle>{gender}</StyledTitle>
      {items.map((item, i) => {
        const url = `/plp?url=${item.url}`
        return <NavLink key={i} href={url} as={item.url} label={item.name} />
      })}
    </StyledNav>
  )
}
