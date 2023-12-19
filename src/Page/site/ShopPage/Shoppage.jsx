import React, { useContext, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import "./Shop.css"
import { FaBars } from 'react-icons/fa6'
import { BiLogoKubernetes } from "react-icons/bi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import DataContexs from '../../../Contexts/Contexts';
import { Link } from 'react-router-dom';
import { CiHeart, CiShoppingBasket } from 'react-icons/ci';
import { TbArrowsExchange } from 'react-icons/tb';
import { IoEyeSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addtoBasket } from '../../../Redux/slice/BasketSlice';
import { addtoWishlist } from '../../../Redux/slice/Wishlist';
import { Toast } from 'flowbite-react'
import { toast } from 'react-toastify'



function Shoppage() {
  let {data,setData}=useContext(DataContexs)
  const dispatch=useDispatch()
 const handleSort=(e)=>{
    e.preventDefault();
    let sorted = [...data].sort((a, b) => a.price - b.price);
    setData([...sorted]);
    toast.info("sorted from low price to high price", {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
    <div style={{display:"flex"}} className="container">
    
    <div className="right-bar">
    <p>Home <IoIosArrowForward /> Shop</p>
      <button  className='btn-catagories'>Categories</button>
      <p>Accesories(5)</p>
      <div className="boss"></div>
      <p>Arts&Photography(10)</p>
      <div className="boss"></div>
      <p>Biographies(16)</p>
      <div className="boss"></div>
      <p>Buisness&Money(10)</p>
      <div className="boss"></div>
      <p>Calendars(6)</p>
      <div className="boss"></div>
      <p>Children's Book (9)</p>
      <div className="boss"></div>
      <p>Comics(16)</p>
      <div className="boss"></div>
      <p>Cook Books (10)</p>
      <div className="boss"></div>
      <p>Education(10)</p>
      <div className="boss"></div>
      <p>House Plants(6)</p>
      <div className="boss"></div>
      <p>Indor Living(9)</p>
      <div className="boss"></div>
      <p>Performance Filter(12)</p>
      <div className="boss"></div>
      <p>Shop(16)</p>
      <div className="boss"></div>
      <p>Saws(0)</p>
      <div className="boss"></div>
      <p>Concrate Tools(7)</p>
      <div className="boss"></div>
      <p>Drils(2)</p>
      <div className="boss"></div>
      <p>Sanders(1)</p>
      <div className="boss"></div>
      <button onClick={(e)=>handleSort(e)}  className='btn-catagories'>Filter By Price</button>
      <div className="bose"></div>
      <p>£80 - £361</p>
      <button  className='btn-catagories'>Manufacturer</button>
      <p>Cristian Diors(5)</p>
      <div className="boss"></div>
      <p>Diesell(10)</p>
      <div className="boss"></div>
      <p>Ferragamo(16)</p>
      <div className="boss"></div>
      <p>Hermes(10)</p>
      <div className="boss"></div>
      <p>Louies Hution(6)</p>
      <div className="boss"></div>
      <p>Tommy Hligher(9)</p>
      <div className="boss"></div>
      <p>Versace(16)</p>
      <div className="boss"></div>
      <button  className='btn-catagories'>Select By Color</button>
      <p>Red</p>
      <div className="boss"></div>
      <p>Black</p>
      <div className="boss"></div>
      <p>Blue</p>
      <div className="boss"></div>
      <p>Green</p>
      <div className="boss"></div>
      <p>Yellow</p>
      <div className="boss"></div>
      <p>Purple</p>
      <div className="boss"></div>
      <img className='kubok' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/home-side-promo.jpg" alt="" />
    </div>
    <div className="left-bar">
    <div className="bars-container">
    <div className="bars">
      <BiLogoKubernetes />
      <FaBars />
      <HiBars3BottomLeft />
      </div>
      <div className="wors">
  <p>    Showing 1 to 9 of 14 (2 Pages)</p>
      </div>
      <div className="shows">
        <p>show</p>
      </div>
      <div className="sortby">
        <p> Sort by:Default Sorting</p>
      </div>
    </div>
    <div className="all">
  {
    data.slice(0,8).map((item,index)=>(
      <div key={index} className="cartt">
  <div className="yazs">
  <p style={{color:"gray",paddingLeft:"60px"}}>{item.description}</p>
         <Link to={`/${item.id}`}><p >{item.title}</p></Link>
  </div>
        <img src={item.image} className='img' alt="" />
        <p style={{color:"green",paddingLeft:"30px",fontSize:"22px",paddingTop:"10px"}}>€{item.price}</p>
        <div className="icons-hover">
        <CiShoppingBasket onClick={()=>{dispatch(addtoBasket(item))}} className='gr'   />
        <CiHeart onClick={()=>{dispatch(addtoWishlist(item))}} className='gr' />
        <TbArrowsExchange  className='gr' />
        <IoEyeSharp  className='gr'/>
        </div>
      </div>
     
    ))
  }
    </div>
  
    </div>
  

    </div>
<Toast/>
    </div>
  )
}

export default Shoppage
