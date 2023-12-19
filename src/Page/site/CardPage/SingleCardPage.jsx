import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoBasket } from '../../../Redux/slice/BasketSlice';
import { addtoWishlist } from '../../../Redux/slice/Wishlist';
import { CiHeart, CiShoppingBasket } from 'react-icons/ci';
import { TbArrowsExchange } from 'react-icons/tb';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './CardPage.css';

function SingleCardPage({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="two-two-item">
      <div className="bookpage">
        <p style={{ color: 'gray' }}>{item.description}</p>
        <Link to={`/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <img src={item.image} className="img" alt="" />
        <p style={{ color: 'green' }}>€{item.price}</p>
        <div className="iconss">
          <CiShoppingBasket onClick={() => dispatch(addtoBasket(item))} className="gr" />
          <CiHeart onClick={() => dispatch(addtoWishlist(item))} className="gr" />
          <TbArrowsExchange className="gr" />
          <IoEyeSharp className="gr" />
        </div>
      </div>
    </div>
  );
}

export default SingleCardPage;
