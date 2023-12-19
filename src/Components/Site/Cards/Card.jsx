import React from 'react'
import "./Cards.css"
import { CiHeart, CiShoppingBasket } from 'react-icons/ci'
import { TbArrowsExchange } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoBasket } from '../../../Redux/slice/BasketSlice';
import { addtoWishlist } from '../../../Redux/slice/Wishlist';
function Card({item}) {
  const dispatch=useDispatch()
  return (
    <div>
   <div className="cont">
   <div className="cart">
      <p style={{color:"gray"}}>{item.description}</p>
         <Link to={`/${item.id}`}><p >{item.title}</p></Link>
        <img src={item.image} className='img' alt="" />
        <div className="iconlar">
        <CiShoppingBasket className='gr' onClick={()=>{dispatch(addtoBasket(item))}}  />
        <CiHeart  className='gr'  onClick={()=>{dispatch(addtoWishlist(item))}} />
        <TbArrowsExchange className='gr' />
        <IoEyeSharp  className='gr'/>
        </div>
        <p style={{color:"green"}}>€{item.price}</p>
      </div>
   </div>
    </div>
  )
}

export default Card
