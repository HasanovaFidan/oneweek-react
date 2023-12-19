import React, { useContext } from 'react'
import "./Poster.css"
import DataContexs from '../../../Contexts/Contexts'

import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
function Poster() {
  let { data, setData } = useContext(DataContexs)
  return (

    <div className='post'>
      <div className='pos'>
        <h4>BEST BEST SELLER BOOKS</h4>
      </div>
      <div className="poster">
        <div className="right__poster">
          <img src="https://demo.hasthemes.com/pustok-preview/pustok/image/others/best-seller-author.jpg" alt="" />
        </div>
        <div className="left__poster">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={2}
                spaceBetween={5}
                freeMode={true}
                grid={{
                  rows: 2,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Grid, Pagination]}
                className="mySwiper"
              >
                <>
                  <div className='container'>
                    <div className='row'>
                      {
                        data.slice(1, 7).map((item, index) => (
                          <SwiperSlide key={index} >
                            <div className="poster__card">
                              <p style={{ color: "gray" }}>{item.description}</p>
                              <Link to={`/${item.id}`}><p >{item.title}</p></Link>
                              <img src={item.image} className='img' alt="" />
                              {/* yzilacaq overlay */}
                              <p style={{ color: "green" }}>€{item.price}</p>
                            </div>
                          </SwiperSlide>
                        ))
                      }
                    </div>
                  </div>
                </>
              </Swiper>
            </div>
          </div >

        </div>

      </div>
    </div>
  )
}

export default Poster


// {
//     data.map((item, index) => (
//       <SwiperSlide key={index} >
//   <div className="poster__card">
// <p style={{color:"gray"}}>{item.description}</p>
// <p>{item.title}</p>
// <img src={item.image} className='img' alt="" />
// {/* yzilacaq overlay */}
// <p style={{color:"green"}}>€{item.price}</p>
// </div>
//       </SwiperSlide>
//     ))
//   }