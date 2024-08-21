import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import './style.css';

const PopularBread = () => {
    return (
        <section className='max-w-6xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold mb-2 text-black'>The Most Popular Breeds</h3>
                <p className='max-w-lg mx-auto'>
                    Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.
                </p>
            </div>
            <div className='popularBread'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/image/PopularBreads/middle.png" alt="Popular Bread 8" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default PopularBread;
