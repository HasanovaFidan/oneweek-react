import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import"./Detail.css"
import { LiaStarSolid } from "react-icons/lia";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoHeart } from "react-icons/io5"
import { DiGitCompare } from "react-icons/di";
import LastBook from '../../../Components/Site/Last/LastBook';
import LastBooks from '../../../Components/Site/Last/LastBooks';
function Detailpage() {
  const { id } = useParams()
  console.log(id)
  const [item, setItem] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:3000/Books/${id}`).then(res => {
      setItem(res.data);
      window.scrollTo(0, 0);
    },[])
  
  }, [])
  return (
  <div className="counter">
      <div className='flexx'>
      <div className="sekil">
        <img src={item.image} alt="" />
      </div>
        <div className="p">
        <p>{item.description}</p>
    <h4>Name:{item.title}</h4>
 <p>Ex Tax: <span>£{item.price}</span></p>
<p>Brands: <span> Canon</span> </p>
<p>Product Code: <span>model1</span>  </p>
<p>Reward Points: <span>200</span></p>
<p>Availability: <span>In Stock</span></p>
    <p>Category:{item.category}</p>
    <p style={{color:"#5c9018",fontSize:"30px"}}>€{item.price}</p>
    <div className="stars">
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
    <BsStarHalf />
    <p style={{color:"black",fontSize:"15px"}}>(1 Reviews)| Write A Review</p>
    </div>
    <p style={{paddingTop:"12px"}}>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust with <br /> ruffles at the bottom of the dress.</p>
<div className="qty">
  <p>Qty</p>
<span className='one__qty'>1</span>
<button>Add To Cart+</button>
</div>
<div  className="flex">
<p> <IoHeart className='hergit' />Add to Wish List</p>
<p> <DiGitCompare className='hergit'/>Add to Compare</p>
</div>
    </div>
    </div>
  </div>
  )
}

export default Detailpage
