import styles from '../styles/Layout.module.css'
import React, { ReactNode } from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {props.children}
        <Footer />
      </main>
    </div>
    </>
  )
}

export default Layout
