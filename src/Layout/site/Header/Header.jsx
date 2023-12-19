import React, { useRef, useState } from 'react'
import "./Header.css"
import { FaArrowRight, FaHeadphones } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import Search from '../../../Components/Site/Search/Search';



function Header() {
  const showRef = useRef()
  const toggleAbsalute = () => {
    showRef.current.classList.toggle("show")
  }
  return (
    <div>
      <header>
        <div className="nav">
          <div className="right">
            <img src="https://totalpng.com//public/uploads/preview/envato-logo-png-hd-copy-11656657466fokitujnv4.png" alt="" />
            <p>evanto</p> <span>market</span>
          </div>
          <div className="left">
            <button className='buy'>Buy now</button>

          </div>
        </div>
        <div className="bottom__div">
          <div className="container">
            <div className="one">
              <div className="one__section">
                <h1>Pustok.</h1>

              </div>
              <div className="two__section">
                <FaHeadphones className='headphone' /> <span>Free Support 7/24 <br />0558138689</span>
              </div>
              <div className="three__section">
                <Link to="" className="header-link">
                  Home <IoIosArrowDown />
                  <div className="hover-content">
                    <ul>
                      <li>Home one</li>
                      <li>Home two</li>
                      <li>Home three</li>
                      <li>Home four</li>
                    </ul>
                  </div>
                </Link>
                <Link to={"shop"} className="header-lin">
                  Shop  <IoIosArrowDown />
                  <div className="hover-contenx">
                    <div className="flex">
                      <ul>
                        <li>Shop Grid</li>
                        <li>Full Width</li>
                     <Link to={"shop"}>   <li>Left SideBar</li></Link>
                        <li>Right SideBar</li>


                      </ul>
                      <ul>
                        <li>Shop List</li>
                        <li>Full Width</li>
                        <li>Left SideBar</li>
                        <li>Right SideBar</li>
                      </ul>
                      <ul>
                        <li>Product Details 1</li>
                        <li>Product one</li>
                        <li>Product two</li>
                        <li>Product three</li>

                      </ul>
                      <ul>
                        <li>Product Details 2</li>
                        <li>Product one</li>
                        <li>Product two</li>
                        <li>Product three</li>

                      </ul>
                    </div>
                  </div>
                </Link>
                <Link className="header-link">
                Pages  <IoIosArrowDown />
                  <div className="hover-content">
                    <ul>
               
                    <Link to={"cardPage"}>  <li>Cart</li></Link>
                     <Link to={"check"}> <li>CheckOut</li></Link>
                     <Link to={"compare"}> <li>Compore</li></Link>
                   <Link to={"fav"}>   <li>Wishlist</li></Link>
                   <li>Shop List</li>
                      <li>Login</li>
                      <li>my Accaunt</li>
                      <li>order complate</li>
                      <li>order complate</li>
                      <li>Contact 02</li>
                    </ul>


                  </div>
                </Link>
                <Link to={"basket"} className="header-link">
                  Basket <IoIosArrowDown />
                  <div className="hover-contenx">
                    <div className="flex">
                      <ul>
                        <li>Blog Grid</li>
                        <li>Full Width</li>
                        <li>Left SideBar</li>
                        <li>Right SideBar</li>


                      </ul>
                      <ul>
                        <li>Blog List</li>
                        <li>Full Width</li>
                        <li>Left SideBar</li>
                      </ul>
                      <ul>
                        <li>Blog Details</li>
                        <li>Image Format</li>
                        <li>Galery Format</li>
                        <li>Audio Format</li>
                        <li>Video Format</li>
                        <li>Left SideBar</li>

                      </ul>



                    </div>
                  </div>
                </Link>
                <Link to={"contact"}>Contact</Link>

              </div>
            </div>
            <div className="sea">
              <div className="catagories" onClick={toggleAbsalute} >
                <GiHamburgerMenu className='ic' />
                <h5>Browse catagories</h5>
                <IoIosArrowDown className='ico' />

              </div>
              <div className='absalute'ref={showRef}   >
                <ul>
                  <li><p>Arts&Photoraphy</p><FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>More Catagories</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Biography</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Money&Photoraphy</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Calendars</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Children Books</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Comics</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Performance Filters</p> <FaArrowRight className='bot' /></li>
                  <div className="boss"></div>
                  <li><p>Accesories</p> <FaArrowRight className='bot' /></li>
                </ul>
              </div>
              <Search />
              <div className="login">
                <h6>Login <span>or Register</span></h6>
                <p>Shopping Cart <span>€0.00</span> <IoIosArrowDown /></p>
                <div className="ring">1</div>

              </div>
            </div>

          </div>
        </div>
      </header>
    </div>



  )
}

export default Header
