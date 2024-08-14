
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const PerfectService = () => {
    return (
        <div className='max-w-[1400px] mx-2 lg:mx-auto mb-20 flex items-center justify-center ' >
            <Swiper
                slidesPerView={1} // number of slides to show at once
                spaceBetween={20} // space between slides
                navigation={true} // enable navigation buttons
                loop={true} // enable continuous loop mode
                modules={[Navigation]} // include the Navigation module here
            >
                <SwiperSlide className='mx-2 md:mx-20'>
                    <div className='flex flex-col lg:flex-row  gap-20'>

                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <div className='bg-[#38C5D9] flex justify-center items-center rounded-full w-[240px] relative h-[300px]'>
                                    <img src="/src/assets/image/LookingFor/3.png" alt="Puppy 2" className='w-[220px] h-[320px] absolute bottom-1 -left-2' />
                                </div>
                            </div>


                        </div>

                        <div className='relative pt-16 ml-12 md:ml-2'>
                            <img src="/src/assets/image/ShopPate/Highlight.png" alt="" className=' absolute -left-14 top-8 ' />
                            <h1 className='text-bold text-black text-3xl mb-4'>Perfect Services!</h1>
                            <p className='text-[#938683] text-sm'>The breeder we worked with was very knowledgeable and patient with our questions.  Both <br /> of us were eager to ensure our puppy would be a good match.The AKC Marketplace is <br /> hands down the best resource available to find quality breeders <br />
                                best resource available to find quality breeders</p>
                            <h6 className='text-black text-lg'> ----------- Ripn Khan</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mx-2 md:mx-20'>
                    <div className='flex flex-col lg:flex-row  gap-20'>

                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <div className='bg-[#38C5D9] flex justify-center items-center rounded-full w-[240px] relative h-[300px]'>
                                    <img src="/src/assets/image/LookingFor/3.png" alt="Puppy 2" className='w-[220px] h-[320px] absolute bottom-1 -left-2' />
                                </div>
                            </div>


                        </div>

                        <div className='relative pt-16 ml-12 md:ml-2'>
                            <img src="/src/assets/image/ShopPate/Highlight.png" alt="" className=' absolute -left-14 top-8' />
                            <h1 className='text-bold text-black text-3xl mb-4'>Perfect Services!</h1>
                            <p className='text-[#938683] text-sm'>The breeder we worked with was very knowledgeable and patient with our questions.  Both <br /> of us were eager to ensure our puppy would be a good match.The AKC Marketplace is <br /> hands down the best resource available to find quality breeders <br />
                                best resource available to find quality breeders</p>
                            <h6 className='text-black text-lg'> ----------- Ripn Khan</h6>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PerfectService;