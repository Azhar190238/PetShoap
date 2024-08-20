import React from 'react';
import Banner from '../AllCart/Banner';

const DashboardReviews = () => {
    
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-4 gap-48'>
                    <div className='flex flex-col space-y-10 mb-10'>
                        <h1 className='text-3xl font-bold  my-8'>Dashbord</h1>
                        <a href="/findTrainer">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/profile.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Profile</h1>
                            </div></a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/pet.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Puppy’s</h1>
                            </div>
                        </a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/receipt-2.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Services</h1>
                            </div>
                        </a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/shopping-cart.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Products</h1>
                            </div>
                        </a>
                        <a href="/dashbordReview">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/star.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold text-red-400 '>Reviews</h1>
                            </div>
                        </a>

                    </div>
                    <div className='col-span-3 mb-20'>
                        <div className=' mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10'>
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
                                        <img src='/src/assets/image/DashboardReviews/Ellipse 2909.png'alt="" />
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
                                        <img src='/src/assets/image/DashboardReviews/Ellipse 2909.png'alt="" />
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
                                        <img src='/src/assets/image/DashboardReviews/Ellipse 2909.png'alt="" />
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
                </div>
            </div>
        </div>
    );
};

export default DashboardReviews;