

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PerfectService = () => {
    return (
        <div className='max-w-[1400px] mx-2 lg:mx-auto my-20 mb-20 flex items-center justify-center '>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                // className='!h-[400px] !w-full'
            >
                {
                    [1, 2, 3, 4, 5, 6].map(index => (
                        <SwiperSlide className=' px-20'>
                            <div className='flex flex-col lg:flex-row space-x-40 w-full '>
                                <div className='flex flex-col items-center '>
                                    <div className='flex'>
                                        <div className='bg-[#38C5D9] rounded-full '>
                                            <img
                                                src="/src/assets/image/LookingFor/3.png"
                                                alt="Puppy 2"
                                                className='!w-[400px] !h-full pb-3 pr-12 '
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='relative pt-16 ml-12 md:ml-2 !w-full  '>
                                    <img src="/src/assets/image/ShopPate/koma.png" alt="" className='absolute -left-14  top-8 !w-[56px] !object-fill !h-[56px]' />
                                    <h1 className='text-bold text-black text-3xl mb-4 text-left'>Perfect Services!</h1>
                                    <p className='text-[#938683] text-sm text-left '>
                                        The breeder we worked with was very knowledgeable and patient with our questions. Both <br /> of us were eager to ensure our puppy would be a good match. The AKC Marketplace is <br /> hands down the best resource available to find quality breeders <br /> best resource available to find quality breeders
                                    </p>
                                    <h6 className='text-black text-lg text-left'> ----------- Ripn Khan</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </div>
    );
};

export default PerfectService;
