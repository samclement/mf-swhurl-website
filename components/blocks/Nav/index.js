import React from 'react'
import Link from '../../elements/Link'

export default () => {
  return (
    <nav>
      <Link href="/" label="Home" />
      &nbsp;|&nbsp;
      <Link href="/about" label="About" />
      &nbsp;|&nbsp;
      <Link href="/contact" label="Contact" />
    </nav>
  )
}
