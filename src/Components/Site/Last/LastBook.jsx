import React from 'react'
import "./Last.css"
import { Link } from 'react-router-dom'
import { CiHeart, CiShoppingBasket } from 'react-icons/ci'
import { TbArrowsExchange } from 'react-icons/tb'
import { IoEyeSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addtoBasket } from '../../../Redux/slice/BasketSlice'
import { addtoWishlist } from '../../../Redux/slice/Wishlist'

function LastBook({ item }) {
  const dispatch=useDispatch()
  return (

    <div className="container">
      <div className="lastbook">
        <p style={{ color: "gray" }}>{item.description}</p>
        <Link to={`/${item.id}`}><p >{item.title}</p></Link>
        <img src={item.image} className='img' alt="" />
        <div className="iconlarss">
        <CiShoppingBasket onClick={()=>{dispatch(addtoBasket(item))}} className='gr' />
        <CiHeart onClick={()=>{dispatch(addtoWishlist(item))}} className='gr' />
        <TbArrowsExchange className='gr' />
        <IoEyeSharp  className='gr'/>
        </div>
        <p style={{ color: "green" }}>€{item.price}</p>
      </div>
    </div>
  )
}

export default LastBook
