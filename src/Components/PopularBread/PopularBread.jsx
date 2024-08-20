
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './style.css';
// import './style.css'

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// const PopularBread = () => {
//     return (
//         <section className='max-w-6xl mx-auto'>
//             <div className='text-center'>
//                 <h3 className='text-2xl font-bold mb-2 text-black'>The Most Popular Breeds</h3>
//                 <p className='max-w-lg mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
//             </div>
//             <Swiper

//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper "
//             >
//                 <SwiperSlide >
//                     <img src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className='' src="/src/assets/image/PopularBreads/middle.png" />
//                 </SwiperSlide>

//             </Swiper>
//         </section>
//     );
// };

// export default PopularBread;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const PopularBread = () => {
    const activeStyle = {
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
    };
    
    const inactiveStyle = {
        opacity: 0.5,
        transition: 'opacity 0.3s ease-in-out',
    };
    const [activeIndex, setActiveIndex] = useState(0);

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
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {[...Array(8)].map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className={activeIndex === index ? 'active-slide' : 'inactive-slide'}
                    >
                        <img src="/src/assets/image/PopularBreads/middle.png" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PopularBread;
