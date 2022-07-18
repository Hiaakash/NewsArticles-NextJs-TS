import React from 'react'
import headerStyles from '../styles/Header.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <div><h1 className={headerStyles.title}> <span>WebDev</span> News </h1>
    <p className={headerStyles.description}>Latest tech and innovation updates from world.</p>
    </div>
  )
}

export default Header
