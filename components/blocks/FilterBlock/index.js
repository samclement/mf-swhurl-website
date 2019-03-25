import React from 'react'
import Link from '../../elements/Link'
import styled from 'styled-components'

const StyledBlock = styled.div`
  width: 150px;
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

export default ({ title, filters }) => {
  return (
    <StyledBlock>
      <h2>{title}</h2>
      <StyledList>
        {filters.map((f, i) => {
          const url = `/plp?url=${f.url}`
          return (
            <StyledLi key={i}>
              <Link key={i} href={url} as={f.url} label={f.name} />
            </StyledLi>
          )
        })}
      </StyledList>
    </StyledBlock>
  )
}
