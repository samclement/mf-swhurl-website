import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import { mens, womens } from '../navigation.js'

const GenderNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const GenderNavItem = styled.div`
  text-align: center;
  text-transform: uppercase;
  width 33%;
`

const LogoNavItem = styled.div`
  padding: 0 10px;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
`

const Header = props => {
  const { gender } = props
  return (
    <React.Fragment>
      <nav>
        <GenderNav>
          <GenderNavItem>
            <Link href="/mens">
              <StyledLink href="/mens" isSelected={gender === 'mens'}>
                Men
              </StyledLink>
            </Link>
          </GenderNavItem>
          <LogoNavItem>
            <h1>
              <Link href="/">
                <StyledLink href="/">MATCHESFASHION</StyledLink>
              </Link>
            </h1>
          </LogoNavItem>
          <GenderNavItem>
            <Link href="/womens">
              <StyledLink href="/womens" isSelected={gender === 'womens'}>
                Women
              </StyledLink>
            </Link>
          </GenderNavItem>
        </GenderNav>
      </nav>
      {gender.length > 0 && (
        <Nav items={gender.match(/^men/) ? mens : womens} />
      )}
    </React.Fragment>
  )
}

Header.defaultProps = {
  gender: ''
}

export default Header
