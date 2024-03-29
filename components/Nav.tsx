import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
