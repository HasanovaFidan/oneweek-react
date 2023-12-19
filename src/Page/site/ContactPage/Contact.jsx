import React from 'react'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { MdPhoneIphone } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <div className="container">
<p style={{fontSize:"20px",color:"black"}}>Home <IoIosArrowForward />  Contact</p>
<iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.858040164846!2d49.82190507586511!3d40.36767197144766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzAzLjYiTiA0OcKwNDknMjguMSJF!5e0!3m2!1str!2saz!4v1702645717330!5m2!1str!2saz" style={{width:"100%" ,height:"600px", style:"border:0;",}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div className="register">
    <div className="sag">
        <h4>Location & Details</h4>
        <p>It is a long established fact that readewill be distracted by the <br /> readable content of a page when looking at ilayout.</p>
        <p > <FaLocationDot/>Address: 1234 - Bandit Tringi lAliquamVitae. New York</p>
<p><FaMessage/>Email: support@example.com </p>
<p><MdPhoneIphone  />
Phone: (800) 0123 456 789</p>
    </div>
    <div className="sol">
        <label htmlFor="">Your Name*</label>
        <input className='name' type="text" name="" id="" />
        <label  htmlFor="">Your Email*</label>
        <input className='name' type="text" name="" id="" />
        <label htmlFor="">Your Phone*</label>
        <input className='name' type="text" name="" id="" />
        <label htmlFor="">Your Massage*</label>
        <input className='massa' type="text" name="" id="" />
        <button className='btn btn-dark dar'>Send</button>
    </div>
</div>
</div>
    </div>
  )
}

export default Contact
