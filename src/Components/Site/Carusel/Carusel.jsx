import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import './Carusel.css';
import { FaTruckFast } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa6";
import { FaLifeRing } from "react-icons/fa";

export default function Carusel() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide className='bir'>
          <div className="ig">
            <img src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" />
          </div>
          <div className="write">
            <div className="h2">
              <h2>J.D Kurtness De Vengance</h2>
            </div>
            <div className="p">
              <p>Cover of Front of Books and Leave Summary</p>
            </div>
            <button className='pricee'>$78.09-Learn More!</button>
          </div>

        </SwiperSlide>
        <SwiperSlide className='iki'>

          <div className="write">
            <div className="h2">
              <h2>H.G Weels De Wengeance</h2>
            </div>
            <div className="p">
              <p>Cover of Front of Books and Leave Summary</p>
              <button className='price'>$78.09-Order Now!</button>
            </div>
          </div>
          <div className="ig">
            <img src="  https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
          </div>

        </SwiperSlide>
      </Swiper>

      <div className="container">
        <div className="bunny">
          <div className="visit">
            <div className="visit__icon">
              <FaTruckFast />

            </div>
            <div className="visit__write">
              <p>Free Shipping Item Orders over $500</p>

            </div>
          </div>
          <div className="visit">
            <div className="visit__icon">
              <BsArrowRepeat />

            </div>
            <div className="visit__write">
              <p>Money Back Guarantee
                100% money back</p>

            </div>
          </div>
          <div className="visit">
            <div className="visit__icon">
              <FaPiggyBank />

            </div>
            <div className="visit__write">
              <p>Cash On Delivery
                Lorem ipsum dolor amet</p>

            </div>
          </div>

          <div className="visit">
            <div className="visit__icon">
              <FaLifeRing />

            </div>
            <div className="visit__write">
              <p>Free Shipping Item Orders over $500</p>

            </div>
          </div>

        </div>
      </div>
      <div className="kartinki">
        <img className='kartin' src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text.jpg" alt="" />
        <img className='kartin' src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text-2.jpg" alt="" />
      </div>

    </>
  );
}
