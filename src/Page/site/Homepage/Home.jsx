import React from 'react'
import Carusel from '../../../Components/Site/Carusel/Carusel'
import Cards from '../../../Components/Site/Cards/Cards'
import Books from '../../../Components/Site/Books/Books'
import Poster from '../../../Components/Site/Poster/Poster'
import Children from '../../../Components/Site/ChildrenBooks/Children'
import LastBooks from '../../../Components/Site/Last/LastBooks'
import Blog from '../../../Components/Site/Blog/Blog'

function Home() {
  return (
    <>
      <Carusel/>
      <Cards/>
      <Books/>
      <Poster/>
      <Children/>
      <LastBooks/>
      <Blog/>
    </>
  )
}

export default Home
