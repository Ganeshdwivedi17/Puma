import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function layout({children}) {
  return (
   <>
    <Nav/>
   <main> {children}</main>
    <Footer className={"md:pt-24"}/>
   </>
  )
}

export default layout