import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: ReactNode;
    className?: string;
}

function Layout({children, className}: Props) {
  return (
    <div>
        <Header/>
        <main className={className}>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout