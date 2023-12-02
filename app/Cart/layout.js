import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Prvider from '../Redux/Prvider'

function layout({children}) {
  return (
   <>
   <Prvider>
    <Nav/>
   <main> {children}</main>
    <Footer/>
  </Prvider>
   </>
  )
}

export default layout