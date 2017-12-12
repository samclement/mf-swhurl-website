import React from 'react'
import styled from 'styled-components'
import Link from '../../elements/Link'

export default() => {
  return (
    <nav>
      <Link href="/" name="Home"/>
      &nbsp;|&nbsp;
      <Link href="/about" name="About"/>
      &nbsp;|&nbsp;
      <Link href="/contact" name="Contact"/>
    </nav>
  )
}
