import React from 'react'
import { CiHeart, CiShoppingBasket } from 'react-icons/ci'
import { IoEyeSharp } from 'react-icons/io5'
import { TbArrowsExchange } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtoBasket } from '../../../Redux/slice/BasketSlice'
import { addtoWishlist } from '../../../Redux/slice/Wishlist'

function Book({item}) {
  const dispatch=useDispatch()
  return (
    <div className='top'>
        <div className="container">
   <div className="book">
      <p style={{color:"gray"}}>{item.description}</p>
      <Link to={`/${item.id}`}><p >{item.title}</p></Link>
        <img src={item.image} className='img' alt="" />
        <p style={{color:"green"}}>€{item.price}</p>
        <div className="iconlar">
        <CiShoppingBasket onClick={()=>{dispatch(addtoBasket(item))}} className='gr' />
        <CiHeart onClick={()=>{dispatch(addtoWishlist(item))}} className='gr' />
        <TbArrowsExchange className='gr' />
        <IoEyeSharp  className='gr'/>
        </div>
        <div className="hours">
          <div className="hours__one">
            <p>00</p>
            <p>00</p>
            <p>00</p>
            <p>00</p>
            <p>00</p>
          </div>
          <div className="two__hours">
<p>Days</p>
<p>Hours</p>
<p>mins</p>
<p>Day</p>
<p>Secs</p>
          </div>
        </div>
      </div>
   </div> 
    </div>
  )
}

export default Book
