import React from 'react'
import Header from '../../Layout/site/Header/Header'
import { Outlet, useLocation } from 'react-router'
import Footer from '../../Layout/site/Footer/Footer'
import ContactHeader from '../../Layout/site/ContactHeader'

function SiteRoot() {
  const location=useLocation()
 
  return (
    <div>
      <span style={{display:location.pathname !=="/" &&location.pathname!=="/shop"  ?  "none":""}}>
      <Header  />
      </span>
      <span style={{display:location.pathname !=="/" &&location.pathname!=="/shop" ? "":"none"}}>

     <ContactHeader/>
     </span>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
