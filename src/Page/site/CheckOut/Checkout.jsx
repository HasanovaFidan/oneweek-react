import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import "./Checkout.css";
import { CiStickyNote } from "react-icons/ci";

const Checkout = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [couponOpen, setCouponOpen] = useState(false);

  const handleToggle = (section) => {
    switch (section) {
      case 'login':
        setLoginOpen(!loginOpen);
        setCouponOpen(false); 
        break;
      case 'coupon':
        setLoginOpen(false); 
        setCouponOpen(!couponOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="container">
        <p style={{ fontSize: "20px", color: "black" }}>Home <IoIosArrowForward />  Contact</p>
        <div style={{ paddingTop: "50px" }} className="topon">
          <h2>Checkout</h2>
        </div>
        <div className="accordian-click">
          <div className="accordian-div">
            <div className="sticky" onClick={() => handleToggle('login')}>
              <CiStickyNote className='note' />  <p> Returning customer?<span className='hov'> Click here to login</span></p>
            </div>
          </div>
          {loginOpen && (
            <div className="clicklogin">
              <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
              <label htmlFor="">Username or Email*</label>
              <input type="text" />
              <label htmlFor="">Password *</label>
              <input type="password" />
              <div className="login-div">
                <button className='login-btn'>Login</button>
                <input type="checkbox" />
                <label htmlFor="">I’ve read and accept the terms & conditions</label>
              </div>
              <p style={{ color: "darkred" }}>Lost your password?</p>
            </div>
          )}
          <div className="accordian-div">
            <div className="sticky" onClick={() => handleToggle('coupon')}>
              <CiStickyNote className='note' />  <p> Have a coupon?<span className='hov'> Click here to enter your code</span></p>
            </div>
          </div>
          {couponOpen && (
            <div className="clickloginn">
              <input type="text" placeholder='Coupon Code' />
              <button className='coupen'>Apply Coupon</button>
            </div>
          )}
        </div>
        <div className="fullwidth">
      <div className="right-bling">
        <h4>Billing Address</h4>
        <div className="bosss"></div>
        <div style={{gap:"30px"}} className="flex">
          <div className="emp">
          <label htmlFor="">First Name*</label>
          <input className='lastfisrt' type="text" placeholder='first name' />
          </div>
          <div className="emp">
          <label htmlFor="">Last Name*</label>
          <input className='lastfirst' type="text" placeholder='last name' />
          </div>
         
        </div>
        <div className="companyinput">
          <label htmlFor="">Company Name</label>
          <input type="text" placeholder='company name' />
        </div>
        <div style={{gap:"30px"}} className="flex">
          <div className="emp">
          <label htmlFor="">Email Adress*</label>
          <input className='lastfisrt' type="text" placeholder='email adress' />
          </div>
          <div className="emp">
          <label htmlFor="">Phone no*</label>
          <input className='lastfirst' type="text" placeholder='Phone No' />
          </div>
         
        </div>
        <div className="companyinput">
          <label htmlFor="">Address*</label>
          <input type="text" placeholder='Address Line 1' />
          <input style={{marginTop:"15px"}} type="text" placeholder='Address Line 2' />
        </div>
        <div style={{gap:"30px"}} className="flex">
          <div className="emp">
          <label htmlFor="">Town/City*</label>
          <input className='lastfisrt' type="text" placeholder='Town/City' />
          </div>
          <div className="emp">
          <label htmlFor="">State*</label>
          <input className='lastfirst' type="text" placeholder='State' />
          </div>
         
        </div>
        <div style={{gap:"30px"}} className="flex">
          <div className="emp">
          <label htmlFor="">Town/City*</label>
          <input className='Zip Code*' type="text" placeholder='Zip Code*' />
          </div>
         
        </div>
      <div className="bosss"></div>
      <p>Order notes</p>
      <input className='yeto' type="text" />
      </div>
      <div className="left-bling">
        <h4>YOUR ORDER</h4>
        <div className="bosss"></div>
        <div className="prod">
        <div className="right__pro">
        <h6>Product</h6>
          <p>Cillum dolore tortor nisl X 01</p>
          <p>Auctor gravida pellentesque X 02</p>
          <p>Condimentum posuere consectetur </p>
         <p> Habitasse dictumst elementum X 01</p>
        </div>
        <div className="left__pro">
          <h6>Total</h6>
          <p>$25.00</p>
          <p>$50.00</p>
          <p>$29.00</p>
          <p>$10.00</p>
        </div>
      
  
        </div>
<h6 style={{paddingLeft:"30px"}}>Sub Total</h6>
<div className="bosss"></div>
<h6 style={{paddingLeft:"30px"}}>Shipinf Fee</h6>
<div className="bosss"></div>
<h6 style={{paddingLeft:"30px"}}>Grand Total</h6>
<div style={{backgroundColor:"#7aa93c",height:"3px"}} className="bosss"></div>
<p style={{paddingLeft:"30px"}}>  <CiStickyNote  className='note' />Sorry, it seems that there are no available <br /> payment methods for your state. Please <br /> contact us if you require assistance or wish to <br /> make alternate arrangements.</p>
<div style={{paddingLeft:"30px"}} className="login-div">
                <input type="checkbox" />
                <label htmlFor="">I’ve read and accept the terms & conditions</label>
              </div>
              <div style={{paddingLeft:"30px"}} className="placehold">
                <button className='btn-order'>PLACE ORDER</button>
              </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
