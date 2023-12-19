
import "./Book.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Book from './Book';
import { useContext } from "react";
import DataContexs from "../../../Contexts/Contexts";

function Books() {
let{data,setData}=useContext(DataContexs)

  return (
    <div>
      <div className="green">
        <p>Deal of the day up to 20% off Special offer</p>
      </div>
  
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {
            data.splice(14,21).map((item, index) => (
              <SwiperSlide key={index} ><Book className="swiper-slide" item={item} /></SwiperSlide>
            ))
          }
      </Swiper>
      
  
    </div>
  )
}

export default Books
