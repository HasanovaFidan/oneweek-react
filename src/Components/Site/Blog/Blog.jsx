
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiCalendarDate, CiUser } from "react-icons/ci"
import"./Blog.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

function Blog() {
  return (
    <div>
                 <div className="cont__div">
       <h4>LATEST BLOGS</h4>
       <div className="container">
       <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    <div className="gap">
    <SwiperSlide><img className='bloger' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/blog-grid-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>
            <div className="kadrat">
                <h6> <CiCalendarDate className='calendar' />How Do Water and Care <br /> For Mounted</h6>
                <p> <CiUser className='user'/>Post By Hasetch</p>
                <p style={{fontSize:"15px"}}>virtual Reality and 3-D tehnology are already well-enginer in the estarimanet</p>
               <p>Read More</p>
            </div>
            </SwiperSlide>
        <SwiperSlide><img className='bloger' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/blog-grid-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>    
             <div className="kadrat">
             <h6> <CiCalendarDate className='calendar' />How Do Water and Care <br /> For Mounted</h6>
             <p> <CiUser className='user'/>Post By Hasetch</p>
             <p style={{fontSize:"15px"}}>virtual Reality and 3-D tehnology are already well-enginer in the estarimanet</p>
               <p>Read More</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <img className='bloger' src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/blog-grid-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>
        <div className="kadrat">
        <h6> <CiCalendarDate className='calendar' />How Do Water and Care <br /> For Mounted</h6>
        <p> <CiUser className='user'/>Post By Hasetch</p>
        <p style={{fontSize:"15px"}}>virtual Reality and 3-D tehnology are already well-enginer in the estarimanet</p>
               <p>Read More</p>
            </div>
        </SwiperSlide>
    </div>
      </Swiper>
    </>
       </div>
       </div>
    
    </div>

  )
}

export default Blog
