import React, { useRef } from 'react'
import { FaArrowRight, FaHeadphones } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'
import { MdPhoneIphone } from "react-icons/md";

function ContactHeader() {
  return (
    <div>
      <div className='container'>
        <div className="flexpustok">
          <div>

            <div>
              <div className="search">
                <h1 style={{ paddingRight: "100px", fontSize: "60px" }}>Pustok.</h1>
                <input className='inp' type="text" placeholder='search entire store here' />
                <button className='btn-search'>Search</button>
                <div style={{ paddingLeft: "100px" }} className="login">
                  <h6>Login <span>or Register</span></h6>
                  <p style={{ paddingLeft: "30px" }}>Shopping Cart <span>€0.00</span> <IoIosArrowDown /></p>
                  <div className="ring">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="heading">
        <div style={{ display: "flex", gap: "70px" }} className="container">
          <div className="bow">
            <GiHamburgerMenu style={{ marginLeft: "10px" }} />
            <p>Browse catagories</p>
          </div>
          <div className="phone">
            <FaHeadphones style={{ color: "white" }} className='headphone' /> <span style={{ color: "white" }}>Free Support 7/24 <br />0558138689</span>
          </div>

          <div className="three__section">
            <Link style={{ color: "white" }} to="" className="header-link">
              Home <IoIosArrowDown />

            </Link>
            <Link style={{ color: "white" }} to={"shop"} className="header-lin">
              Shop  <IoIosArrowDown />

            </Link>
            <Link style={{ color: "white" }} to={"basket"} className="header-link">
              Basket  <IoIosArrowDown />

            </Link>
            <Link style={{ color: "white" }} className="header-lin">
              Pages  <IoIosArrowDown />

            </Link>
            <Link style={{ color: "white" }} to={"contact"}>Contact</Link>

          </div>
        </div>
      </div>

    </div>

  )
}

export default ContactHeader
