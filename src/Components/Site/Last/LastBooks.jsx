
import { useContext } from 'react';
import DataContexs from '../../../Contexts/Contexts';
import LastBook from './LastBook';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Last.css"
function LastBooks() {
    let { data, setData } = useContext(DataContexs)
    return (
        <div>
            <div className='container'>
                <div className="cont__div">
                    <h4>ARTS & PHOTOGRAPHY BOOKS</h4>
                    <div className="boss"></div>
                </div>
                <>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="swiperLastBoot"
                    >
                        {
                            data.slice(1, 9).map((item, index) => (
                                <SwiperSlide key={index} className='mx-3 swiper-slideLastBook'>
                                    <LastBook item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </>

            </div>
            <div className="idea">
                <div className="co">
                    <p>I Love This Idea!</p>
                    <p>Cover up Front of Book and Leave <br /> Summary</p>
                    <button>$78.09-Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default LastBooks