import React from 'react'
import Header from '../../Layout/Admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/Admin/Footer/Footer'

function AdminRoot() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminRoot
