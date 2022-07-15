import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cursor from '../components/Cursor/Cursor'
const Layout = ({children, isMousein, setIsMousein}) => {
  return (
    <>
        <Cursor isMousein={isMousein}/>
        <Header setIsMousein={setIsMousein}/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout