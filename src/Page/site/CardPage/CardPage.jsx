
import "./CardPage.css"
import { IoIosArrowForward } from 'react-icons/io'
import { RiDeleteBinLine } from "react-icons/ri";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleCardPage from "./SingleCardPage";
import DataContexs from "../../../Contexts/Contexts";
import { Autoplay, Pagination } from 'swiper/modules';


const CardPage = () => {
    let{data,setData}=useContext(DataContexs)
  return (
    <div>
     <div className="container">
     <p style={{ fontSize: "20px", color: "black" }}>Home <IoIosArrowForward />Card</p>
     <div style={{ paddingTop: "30px" }} className="topon">
          <h2>Shopping Cart</h2>
        </div>
<div className="thead-div">
       
<table class="my-custom-table">
<thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
  <tbody>
    <tr>
      <th scope="row"><RiDeleteBinLine  style={{fontSize:"20px" ,textAlign:"center"}} /></th>
      <td><img style={{width:"80px",height:"100px"}} src="https://r2.1k-cdn.com/sig/size:256/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F56586_Qz9Gk_1645586639.jpg" alt="" /></td>
      <td>Rinosin Glasses</td>
      <td>395$</td>
      <td><input className='number' type="number" /></td>
      <td>Total</td>

    </tr>
    <tr>
      <th scope="row"><RiDeleteBinLine style={{fontSize:"20px" ,textAlign:"center"}} /></th>
      <td><img style={{width:"80px",height:"100px"}} src="https://static-cse.canva.com/blob/1226146/1024w-YK0hJ7kFmP8.jpg" alt="" /></td>
      <td>Rinosin Glasses</td>
      <td>395$</td>
      <td><input className='number' type="number" /></td>
      <td>Total</td>

    </tr>

  </tbody>
</table>
<div className="applycupon">
<input type="text" name="" id="" placeholder='cupon code' />
    <button>Apply Cuppon</button>
</div>
<div className="updatecard">
    <button>Update Card</button>
</div>
</div>
<div  className="flex">
<div className="right-page">
     <div style={{ paddingTop: "30px" }} className="topon">
          <h3>YOU MAY BE INTERESTED IN…</h3>
        </div>
        <div style={{ paddingTop: "30px" }} className="topon">
        <>
        <Swiper
  className="mySwiper"
  pagination={{ clickable: true }}  
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false
  }}
>
  {data.splice(14, 21).map((item, index) => (
    <SwiperSlide key={index}><SingleCardPage className="swiper-slide" item={item} /></SwiperSlide>
  ))}
</Swiper>
    </>
        </div>
</div>
<div style={{ paddingTop: "30px" }} className="topon">
<div className="left-page">
    <div className="full-div">
       <div className="flex-end">
        <p>Cart Summary</p>
       </div>
   <div className="flex-right">
   <div className="sub-right">
        <p>Sub Total</p>
        <p>Shipping Cost</p>
       </div>
       <div className="sub-left">
        <span>1250$</span>
        <span>00.00$</span>
       </div>
   </div>
   <div className="boss">
   <div className="flex-right">
   <div className="sub-right">
        <p style={{paddingTop:"22px",fontSize:"20px",paddingLeft:"22px"}}>Grand Total</p>
       </div>
       <div className="sub-left">
        <span style={{fontSize:"20px"}}>1250$</span>
       </div>
   </div>
   </div>
    </div>
    <div className="flex-drection">
        <button>Update Card</button>
        <button>CHECKOUT</button>
    </div>
</div>
</div>
</div>
     </div>
    </div>
  )
}

export default CardPage
