import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: deeppink;
`

export default ({children}) => {
  return (
    <H1>{children}</H1>
  )
}
