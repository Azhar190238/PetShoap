
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const PopularBread = () => {
    return (
        <section className='max-w-6xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold mb-2 text-black'>Featured Services</h3>
                <p className='max-w-lg mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="/src/assets/image/PopularBreads/middle.png" />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default PopularBread;
