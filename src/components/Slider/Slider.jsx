import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './Slider.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Lorem ipsum dolor sit.</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores obcaecati tempore fuga modi! Quaerat rem ut corporis voluptates quas neque quos accusantium! Dolorem tempora maiores repellendus. Dolorum, iusto. Soluta, rem.</p>
                            <a className='text-white' href="">Lorem.</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Lorem ipsum dolor sit.</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores obcaecati tempore fuga modi! Quaerat rem ut corporis voluptates quas neque quos accusantium! Dolorem tempora maiores repellendus. Dolorum, iusto. Soluta, rem.</p>
                            <a className='text-white' href="">Lorem.</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className="slide-text">
                            <h1 className='text-4xl text-white'>Lorem ipsum dolor sit.</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores obcaecati tempore fuga modi! Quaerat rem ut corporis voluptates quas neque quos accusantium! Dolorem tempora maiores repellendus. Dolorum, iusto. Soluta, rem.</p>
                            <a className='text-white' href="">Lorem.</a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
