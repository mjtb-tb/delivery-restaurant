import './Slider.css';
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Box from '../Box/Box';
//swiper
import { Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//swiper


export default function Slider({data}){


  return(
    <>
        
        <section className='slider'>
            <div className='slider-title'>انواع وعده ها</div>
            <div className='slider-content'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        460:{
                            slidesPerView:2
                        },
                        640:{
                            slidesPerView:3
                        },
                        900:{
                            slidesPerView:4
                        },
                        1000:{
                            slidesPerView:5
                        },
                    }}
                >
                    {
                        data.map((d)=>{
                            return(
                                <SwiperSlide className='slide'><Box {...d}></Box></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                
            </div>
        </section>
    </>
  )
}