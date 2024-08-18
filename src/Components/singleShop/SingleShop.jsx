
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import ss1 from '../../assets/image/singleShop/ss slider.png'
import star from '../../assets/image/singleShop/star.png'
import love from '../../assets/image/singleShop/love.png'
import reviewer from '../../assets/image/singleShop/reviewer.png'
import sc1 from '../../assets/image/singleShop/sc1.png'
import sc2 from '../../assets/image/singleShop/sc3.png'
import sc3 from '../../assets/image/singleShop/sc3.png'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const SingleShop = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section>
            <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-56 flex justify-between relative'>
                <div className='ml-4 md:ml-20 flex flex-col items-center justify-center'>
                    <h1 className='text-[#181818] font-bold text-3xl pl-5'>Our Shop</h1>
                    <div className='flex space-x-2'>
                        <img src={homeIcon} alt="" />
                        <p className='mt-3'>Home /<span className='text-[#FF5C2C]'> Shop</span></p>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={pussyBanner} alt="" className='w-64 md:w-full' />
                </div>
            </div>

            <div className='max-w-[1320px] mx-auto mt-32 p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-16'>
                    <div className='p-6'>

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}

                            watchSlidesProgress={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onClick={setThumbsSwiper}
                            navigation={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ss1} />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className='shadow-xl p-6 rounded-lg'>
                        <h4 className='font-extrabold text-2xl'>ACANA Singles Grain Free Limited Ingredient Diet Duck and Pear Formula Dog reats</h4>
                        <p className='w-10/12 mt-3 text-[#938683]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        </p>
                        <div className='mt-8 mb-8'>
                            <p>By NextGrad</p>
                            <p>SKU: 0984504</p>
                        </div>
                        <div className='mx-auto flex gap-2 justify-center'>
                            <img src={star} alt="" />
                            <p className='text-center'>(4.5) 25 Review</p>
                        </div>
                        <p className='mt-8 mb-8'>$9.99–$22.99</p>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Weight</span>
                            </div>
                            <select className='w-full p-3 rounded-3xl border-2 input border-[#FF5C2C]' name="" id="">
                                <option value="a">150 gram</option>
                                <option value="a">250 gram</option>
                                <option value="a">350 gram</option>
                            </select>

                        </label>
                        <p className='mt-8 mb-8'>$22.99</p>
                        <div className='flex justify-between gap-4 items-center'>
                            <div>
                                <button className='btn bg-white rounded-3xl border-[#FF5C2C] border-2 text-black px-12'>
                                    <div className='flex justify-between gap-6 font-bold'>
                                        <p> - </p>
                                        <p> 1 </p>
                                        <p> + </p>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button className='btn rounded-3xl bg-[#FF5C2C] text-white px-12'>Add to cart</button>
                            </div>
                            <div>
                                <img src={love} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-28'>
                    <div className='flex gap-10'>
                        <h4 className='font-extrabold text-2xl text-black'>4.5</h4>
                        <h4 className='font-extrabold text-2xl text-[#545B61]'>Average Rating</h4>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-8 '>
                            <div>
                                <img src={reviewer} alt="" />
                            </div>
                            <div>
                                <h4 className='font-extrabold text-2xl text-black'>Komoles Sarkar</h4>
                            </div>
                        </div>
                        <p className='text-[#938683] mt-4'>This will go great with my Hoodie that I ordered a few weeks ago.</p>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-8 '>
                            <div>
                                <img src={reviewer} alt="" />
                            </div>
                            <div>
                                <h4 className='font-extrabold text-2xl text-black'>Komoles Sarkar</h4>
                            </div>
                        </div>
                        <p className='text-[#938683] mt-4'>This will go great with my Hoodie that I ordered a few weeks ago.</p>
                    </div>

                    <div className='mt-32'>
                        <p className='text-[#938683] mt-4'>Your email address will not be published. Required fields are marked *</p>
                        <div className='w-1/2'>
                            <div className='flex gap-4 mt-8'>
                                <div className='flex-1'>
                                    <label className="form-control w-full">
                                        <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C]' type="text" placeholder='Name' required />
                                    </label>
                                </div>
                                <div className='flex-1'>
                                    <label className="form-control w-full">
                                        <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C]' type="text" placeholder='Email' required />
                                    </label>
                                </div>
                            </div>
                            <label className="form-control w-full mt-4">
                                <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C] h-32' required type="text" placeholder='Your Review' />
                            </label>
                        </div>
                    </div>

                    <div className='mr-10'>
                        <p className='text-[#938683] mt-4'>Your Rating</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src={sc1} />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src={sc2} />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src={sc3} />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingleShop;