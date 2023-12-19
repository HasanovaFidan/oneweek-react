import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist } from '../../../Redux/slice/Wishlist'
import "./wishList.css"

function Wish() {
  const wishlist=useSelector((state) => state.wishlist.items)
  const dispatch=useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className='top'>
      <div className="Just">
        <h1>This is Your Fav Books!</h1>
      </div>
      <table class="table table-bordered">
      <thead>
            <tr>
              <th className='text-center' scope="col">id</th>
              <th className='text-center' scope="col">name</th>
              <th className='text-center' scope="col">Price</th>
              <th className='text-center' scope="col">category</th>
              <th className='text-center' scope="col">Delete</th>
             
            </tr>
          </thead>
          <tbody>
  {
    wishlist.map((item,index)=>(
      <tr key={index}>
      <th scope="row">{item.id}</th>
                <td className='text-center'>{item.product.title}</td>
                <td className='text-center'>{item.product.price}</td>
                <td className='text-center'>{item.product.category}</td>
                <td className='text-center'><button onClick={() => {
                  dispatch(deleteFromWishlist(item))
                }} className='btn btn-danger'>Delete</button></td>
    </tr>
    ))
  }
    </tbody>
</table>
    </div>
  )
}

export default Wish
