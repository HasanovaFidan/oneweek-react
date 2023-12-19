import React from 'react'
import "./Footer.css"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { ImGoogle2 } from "react-icons/im";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa6';
import { LiaCcAmex, LiaCcDiscover } from "react-icons/lia";

function Footer() {
  return (
    <div>
         <div className="container">
        <div style={{marginTop:"30px"}} className="boss"></div>
        <div className="flex">
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-3.jpg" alt="" />
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-5.jpg" alt="" />
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-1.jpg" alt="" />
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-2.jpg" alt="" />
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-6.jpg" alt="" />
            <img className='size' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/brand-4.jpg" alt="" />


        </div>
        <div className="boss">
        </div>

       </div>
        <div className="footer">
        <div className="footer-section">
            <h1>Pustok.</h1>
            <ul>
                <li> <span className='bold'>Adress:</span>Example Street 98, HH2 BacHa, New York, USA</li>
<li> <span className='bold'>Phone:</span>+001 2233 456</li>
                <li><span className='bold'>Email:</span>suport@hastech.com</li>
               
            </ul>
        </div>
        
        <div className="footer-section">
            <h5>INFORMATION</h5>
            <ul>
                <li>Prices drop</li>
                <li>New products</li>
                <li>Best sales</li>
                <li>Contact us</li>
                <li>Sitemap</li>
            </ul>
        </div>

        <div className="footer-section">
            <h5>EXTRAS</h5>
            <ul>
                <li>Delivery</li>
                <li>About Us</li>
                <li>Stores</li>
                <li>Sitemap</li>
            </ul>
        </div>

        <div className="footer-section">
            <h5>NEWSLETTER SUBSCRIBE</h5>
            <ul>
              <input className='mail' type="text" placeholder='Enter Your Email Adress Here' />
              <button className='email'>SUBSCRIBE</button>
              <h5 style={{color:"black"}}>STAY CONNECTED</h5>
              <div className="flex">
              <FaInstagramSquare className='ff' />
              <FaFacebookSquare className='fff'/>
              <ImGoogle2  className='ffff'/>
              <FaYoutubeSquare className='fffff'/>
              </div>

              
            </ul>
        </div>
    </div>
    <div className="endo">
      <p>Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor. Etiam vel magna volutpat, posuere eros</p>
   <div className="divv">
   <FaCcPaypal className='di' />
      <FaCcVisa className='di' />
      <LiaCcAmex className='di'/>
      <FaCcMastercard className='di' />
   </div>
      <p>Copyright © 2022 <span>Pustok</span>. All Right Reserved.</p>
      <p>Design By Pustok</p>
    </div>
    
    </div>
  )
}

export default Footer
