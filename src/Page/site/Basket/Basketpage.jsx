import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataContexs from '../../../Contexts/Contexts'
import { decreaseBtn, deleteFromBasket, increaseBtn } from '../../../Redux/slice/BasketSlice'
import"./Basket.css"
import axios from 'axios'


const Basketpage = (items) => {
  const basket = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()
  let totalPrice = 0

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>

      <div className='top'>
      <table class="table table-special">
          <thead>
            <tr>
              <th className='text-center' scope="col">id</th>
              <th  className='text-center' scope="col">name</th>
              <th  className='text-center' scope="col">decrease</th>
              <th  className='text-center' scope="col">count</th>
              <th  className='text-center' scope="col">increase</th>
              <th  className='text-center' scope="col">Price</th>
              <th  className='text-center' scope="col">category</th>
              <th  className='text-center' scope="col">Total Price</th>
              <th  className='text-center' scope="col">Delete</th>
             
            </tr>
          </thead>
          <tbody>
            {
              basket.map((item, index) => {
                {totalPrice += Math.ceil(item.totalPrice)}
                return    <tr key={index}>
                <td  className='text-center' scope="row">{item.id}</td>
                <td  className='text-center'>{item.product.title}</td>
                <td  className='text-center'><button className='btn btn-success'

                  onClick={() => {
                    dispatch(decreaseBtn(item))
                  }}>-</button></td>
                <td  className='text-center'>{item.count}</td>
                <td  className='text-center'>
                  <button className='btn btn-info'
                  onClick={() => {
                    dispatch(increaseBtn(item))
                  }}>+</button>
                  </td>

                <td  className='text-center'>{item.product.price}</td>
                <td  className='text-center'>{item.product.category}</td>
                <td  className='text-center'>{Math.ceil(item.totalPrice)}</td>
                <td  className='text-center'> <button onClick={() => {
                  dispatch(deleteFromBasket(item))
                }} className='btn btn-danger'>Delete</button></td>
              </tr>
               
              })
            }

          </tbody>

        </table>
      </div >
      <h1>TotalPrice: {totalPrice}</h1>
     
      </>

  )
}

export default Basketpage
