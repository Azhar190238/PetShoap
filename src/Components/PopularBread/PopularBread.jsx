import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const PopularBread = () => {
    return (
        <section className='max-w-6xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold mb-2 text-black'>The Most Popular Breeds</h3>
                <p className='max-w-lg mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/image/PopularBreads/middle.png" alt="Breed 8" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PopularBread;
