import sliderPicture from '../../assets/image/review/SliderPictures.png'
import trainer from '../../assets/image/review/trainer.png'
import user from '../../assets/image/review/user.png'
import rs1 from '../../assets/image/review/rs1.png'
import rs2 from '../../assets/image/review/rs2.png'
import rs3 from '../../assets/image/review/rs3.png'



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'



const Review = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigate = useNavigate();

    return (
        <section>
            <div className='max-w-[1320px] mx-auto mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-16'>
                    <div className='col-span-1 md:col-span-2'>

                        <Swiper
                            // style={{
                            //     '--swiper-navigation-color': '#fff',
                            //     '--swiper-pagination-color': '#fff',
                            // }}
                            spaceBetween={2}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img className='w-full' src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>


                        </Swiper>
                        <Swiper
                            onClick={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <img className='w-full' src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className='shadow-xl p-6 rounded-lg'>
                        <div className='flex justify-between'>
                            <a className='font-bold text-black text-xl' href="">Basic</a>
                            <a className='font-bold text-black text-xl' href="">Standard</a>
                            <a className='font-bold text-black text-xl' href="">Premium</a>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <p className='font-bold'>Startups Pack</p>
                            <p className='font-bold'>$30</p>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-bold '>Basic Training - Canine Good Citizen</h4>
                        </div>
                        <div className='mt-4'>
                            <ul >
                                <li> <input type="radio" name="a" id="" /> Basic Training - Canine Good Citizen</li>
                                <li> <input type="radio" name="a" id="" /> Basic Training - Advanced CGC</li>
                                <li> <input type="radio" name="a" id="" /> Basic Training - Urban CGC</li>
                            </ul>
                        </div>
                        <div className='text-center mt-8'>
                            <button  className="btn mt-1 w-full rounded-3xl bg-[#FF5C2C] text-white font-bold"> Order Now</button>
                        </div>
                        <div className='text-center mt-8'>
                        <button onClick={ ()=> navigate('/contact')} className="btn mt-1 w-full bg-none rounded-3xl border border-[#FF5C2C] text-black font-bold"> Contact Trainer</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center mt-20'>
                    <h4 className='font-bold text-black font-xl mx-auto'>About This Services</h4>
                    <p className='mt-4 w-2/5 text-[#545B61] mx-auto text-center'>We are a reward-based training company that offers private in-home training, as well as, group classes at The Pooch Palace in the beautiful, Alabama town of Cullman. For more information about us, visit our website, NamasteDogTraining.com, or find us on Facebook, Instagram, Tik Tok, and Youtube! </p>

                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>What I train</h4>

                    <div className='mt-8  mx-auto'>
                        <ul className='mx-auto' >
                            <li > <input type="radio" name="a" id="" /> Basic Training - Canine Good Citizen</li>
                            <li className='mt-3'> <input type="radio" name="a" id="" /> Basic Training - Advanced CGC</li>
                            <li className='mt-3'> <input type="radio" name="a" id="" /> Basic Training - Urban CGC</li>
                        </ul>
                    </div>

                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>About This Trainer</h4>


                    <div className="relative indicator mx-auto mb-8">
                        <span className="absolute badge-primary rounded-full p-2 bottom-5 -right-2">top</span>
                        <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-full"><img src={trainer} alt="" />
                        </div>
                    </div>
                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>Namaste Dog Training</h4>

                    <h4 className='font-bold text-black font-xl mx-auto mt-4'> Trainer</h4>

                    <div className="rating rating-md mx-auto mt-4">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <p>5 (125 Reviews)</p>
                    </div>

                    <div className='mx-auto mt-4'>
                        <button className='btn btn-outline bg-blue-900 text-white rounded-3xl'>Contact me</button>
                    </div>

                    <h4 className='font-extrabold text-black text-xl pl-4 mt-4'>FAQ</h4>

                    <div>
                        <div className="collapse collapse-plus border border-b-[#938683]">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-extrabold text-black text-xl">Which package should I purchase?</div>
                            <div className="collapse-content">
                                <p>yes, you will get print-ready 300 dpi png.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border border-b-[#938683]">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-extrabold text-black text-xl">Which package should I purchase?</div>
                            <div className="collapse-content">
                                <p>yes, you will get print-ready 300 dpi png.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border border-b-[#938683]">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-extrabold text-black text-xl">Which package should I purchase?</div>
                            <div className="collapse-content">
                                <p>yes, you will get print-ready 300 dpi png.</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10'>
                        <div className='col-span-2 shadow-lg p-4 rounded-lg'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-4" className="mask mask-star bg-orange-400" defaultChecked />
                                    </div>
                                </div>
                                <progress className="progress progress-primary" value={95} max="100"></progress>
                                <p>123</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-3" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-3" className="mask mask-star bg-orange-400" />
                                    </div>
                                </div>
                                <progress className="progress progress-primary" value={2} max="100"></progress>
                                <p>2</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
                                    </div>
                                </div>
                                <progress className="progress" value={0} max="100"></progress>
                                <p>0</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                    </div>
                                </div>
                                <progress className="progress" value={0} max="100"></progress>
                                <p>0</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-0" className="mask mask-star bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-0" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-0" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-0" className="mask mask-star bg-orange-400" />
                                        <input type="radio" name="rating-0" className="mask mask-star bg-orange-400" />
                                    </div>
                                </div>
                                <progress className="progress progress-primary" value={0} max="100"></progress>
                                <p>0</p>
                            </div>

                        </div>
                        <div className='shadow-lg p-4 rounded-lg'>
                            <h4 className='text-xl font-bold mb-4'>Rating Breakdown</h4>
                            <div className='flex justify-between '>
                                <div>
                                    <p className='mb-4'>communication</p>
                                </div>
                                <div className='rating'>
                                    <input type="radio" className="mask mask-star-2 bg-orange-400 text-3xl" /> <span className='ml-1'>5</span>
                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <div>
                                    <p className='mb-4'>Trainer</p>
                                </div>
                                <div className='rating'>
                                    <input type="radio" className="mask mask-star-2 bg-orange-400 text-3xl" /> <span className='ml-1'>5</span>
                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <div>
                                    <p className='mb-4'>Puppy service</p>
                                </div>
                                <div className='rating'>
                                    <input type="radio" className="mask mask-star-2 bg-orange-400 text-3xl" /> <span className='ml-1'>5</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='mt-20'>
                            <div className='flex gap-6 items-center'>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>nadavshez</h4>
                                    <p className='text-[#938683]'>Nevada, USA </p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className="rating rating-md  mt-4">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                </div>
                                <div>
                                    <p className='ml-3 mt-5'>5 </p>
                                </div>
                            </div>
                            <p className='text-[#938683] mt-4 w-11/12'>Best ui ux designer we hired so far i on fiverr, we are very happy and lucky to meet emon and adding him to our team, thanks to him we are most assure our product we be designed properly and on time as he is very responsible and kind with time schedules.</p>
                            <h4 className='mt-4 font-bold text-xl'>Purchased: Basic Training - Canine Good Citizen</h4>
                        </div>
                        <div className='mt-20'>
                            <div className='flex gap-6 items-center'>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>nadavshez</h4>
                                    <p className='text-[#938683]'>Nevada, USA </p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className="rating rating-md  mt-4">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                </div>
                                <div>
                                    <p className='ml-3 mt-5'>5 </p>
                                </div>
                            </div>
                            <p className='text-[#938683] mt-4 w-11/12'>Best ui ux designer we hired so far i on fiverr, we are very happy and lucky to meet emon and adding him to our team, thanks to him we are most assure our product we be designed properly and on time as he is very responsible and kind with time schedules.</p>
                            <h4 className='mt-4 font-bold text-xl'>Purchased: Basic Training - Canine Good Citizen</h4>
                        </div>
                        <div className='mt-20'>
                            <div className='flex gap-6 items-center'>
                                <div>
                                    <img src={user} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>nadavshez</h4>
                                    <p className='text-[#938683]'>Nevada, USA </p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className="rating rating-md  mt-4">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                </div>
                                <div>
                                    <p className='ml-3 mt-5'>5 </p>
                                </div>
                            </div>
                            <p className='text-[#938683] mt-4 w-11/12'>Best ui ux designer we hired so far i on fiverr, we are very happy and lucky to meet emon and adding him to our team, thanks to him we are most assure our product we be designed properly and on time as he is very responsible and kind with time schedules.</p>
                            <h4 className='mt-4 font-bold text-xl'>Purchased: Basic Training - Canine Good Citizen</h4>
                        </div>
                    </div>
                </div>
                <div className='mt-20 mb-10'>
                    <h4 className='font-extrabold text-2xl pl-4'>Recommended Traniner</h4>
                    <p className='text-[#938683] pl-4 mb-10'>Lorem ipsum dolor sit amet, est vide voluptaria ex, <br /> nec in hinc solum sat. Neceessitatibus sonet soluta</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src={rs1} />
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
                                <img src={rs2} />
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
                                <img src={rs3} />
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

export default Review;