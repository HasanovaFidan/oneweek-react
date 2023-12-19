import React from 'react'
import"./compare.css"
import { RiDeleteBinLine, RiStarFill } from 'react-icons/ri'
import { SlBasket } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";


function Compare() {
  return (
    <div>
      <div className="container">
      <table class="my-custom-table">
  <tbody>
    <tr>
    <th>Products</th>
      <td style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}><img style={{width:"150px",height:"200px",gap:"10px"}} src="https://bakubookcenter.az/en/get-product-image?fileId=33302&year=2020&month=11" alt="" />
      <p>Glasses</p>
      <h6>Rinosin Glasses</h6>
      </td>
      <td><img style={{width:"150px",height:"200px",gap:"10px"}} src="https://marketplace.canva.com/EAFKTWp2UfQ/1/0/501w/canva-mavi-renkli-yaln%C4%B1zl%C4%B1k-temal%C4%B1-kitap-kapa%C4%9F%C4%B1-oTgbgX4JAxs.jpg" alt="" />
      <p>Glasses</p>
      <h6>Rinosin Glasses</h6>
      </td>
      <td><img style={{width:"150px",height:"200px",gap:"10px"}} src="https://images.penguinrandomhouse.com/cover/9780451530066" alt="" />
      <p>Glasses</p>
      <h6>Rinosin Glasses</h6>
      </td>

    </tr>
    <tr style={{height:"150px"}}>
        <th>Description</th>
        <td>Eye glasses are very important for <br /> thos whos have some difficult in their <br /> eye to see every hing clearly and <br /> perfectly</td>
        <td>Eye glasses are very important for <br /> thos whos have some difficult in their <br /> eye to see every hing clearly and <br /> perfectly</td>
        <td>Eye glasses are very important for <br /> thos whos have some difficult in their <br /> eye to see every hing clearly and <br /> perfectly</td>
    </tr>
    <tr style={{height:"100px"}}>
        <th>Price</th>
        <td>295$</td>
        <td>495$</td>
        <td>369$</td>
      
    </tr>
    <tr style={{height:"100px"}}>
        <th>Color</th>
       <td>Black</td>
       <td>Black</td>
       <td>Black</td>
      
    </tr>
    <tr style={{height:"100px"}}>
        <th>Stock</th>
        <th>In Stock</th>
        <th>In Stock</th>
        <th>In Stock</th>
    </tr>
    <tr style={{height:"100px"}}>
        <th>Add to Cart</th>
        <th>    
       
                  <p className='abs'> <span className='radius'  > <SlBasket className='hovr' /></span>Add To Cart</p>
        </th>
        <th>    
       
       <p className='abs'> <span className='radius'  > < SlBasket className='hovr'  /></span>Add To Cart</p>
</th>
<th>    
       
       <p className='abs'> <span className='radius'  > <SlBasket className='hovr'  /></span>Add To Cart</p>
</th>
    </tr>
    <tr style={{height:"100px"}}>
        <th>Delete</th>
        <th><AiOutlineDelete style={{fontSize:"25px"}} /></th>
        <th><AiOutlineDelete style={{fontSize:"25px"}} /></th>
        <th><AiOutlineDelete style={{fontSize:"25px"}} /></th>
       
   
    </tr>
    <tr style={{height:"100px"}}>
        <th >Rating
        </th>
        <th>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
</th>
<th>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
</th>
<th>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
</th>

 
    </tr>
    
 

  </tbody>
</table>
      </div>
    </div>
  )
}

export default Compare
