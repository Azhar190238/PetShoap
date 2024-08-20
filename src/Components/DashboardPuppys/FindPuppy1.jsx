import React from 'react';
import Banner from '../Shared/Banner/Banner';
import profile from '../../assets/image/dashboardPyppys/profile.png'
import pet from '../../assets/image/dashboardPyppys/pet.png'
import receipt from '../../assets/image/dashboardPyppys/receipt-2.png'
import shoppingCurt from '../../assets/image/dashboardPyppys/shopping-cart.png'
import star from '../../assets/image/dashboardPyppys/star.png'

import d1 from '../../assets/image/dashboardPyppys/d1.png'
import d2 from '../../assets/image/dashboardPyppys/d2.png'
import d3 from '../../assets/image/dashboardPyppys/d3.png'
import d4 from '../../assets/image/dashboardPyppys/d4.png'
import d5 from '../../assets/image/dashboardPyppys/d5.png'

const FindPuppy1 = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <div className='flex flex-col gap-4 mb-10'>
                            <h1 className='text-3xl font-bold my-8'>Dashbord</h1>
                            <a href="">
                                <div className='flex gap-2'>
                                    <img src={profile} alt="" className='' />
                                    <h1 className='text-xl font-bold text-red-400 '>Profile</h1>
                                </div>
                            </a>
                            <a href="">
                                <div className='flex gap-2 '>
                                    <img src={pet} alt="" className='' />
                                    <h1 className='text-xl font-bold '>Puppy’s</h1>
                                </div>
                            </a>
                            <a href="">
                                <div className='flex gap-2'>
                                    <img src={receipt} alt="" className='' />
                                    <h1 className='text-xl font-bold '>Services</h1>
                                </div>
                            </a>
                            <a href="/findPuppy1">
                                <div className='flex gap-2'>
                                    <img src={shoppingCurt} alt="" className='' />
                                    <h1 className='text-xl font-bold '>Products</h1>
                                </div>
                            </a>
                            <a href="">
                                <div className='flex gap-2'>
                                    <img src={star} alt="" className='' />
                                    <h1 className='text-xl font-bold'>Reviews</h1>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between p-3 mt-6 items-center'>
                            <p className='font-bold'>Showing 1-9 of 846 results</p> 
                            <a href="/addPuppy"><button className='btn border border-[#FF5C2C] text-[#FF5C2C] rounded-3xl'>Add New</button></a>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                                <figure className='relative'>
                                    <img src={d1} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-8 p-1 rounded-md'> $ 225</p>
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
                                    <img src={d2} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-8 p-1 rounded-md'> $ 225</p>
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
                                    <img src={d3} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-8 p-1 rounded-md'> $ 225</p>
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
                                    <img src={d4} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-8 p-1 rounded-md'> $ 225</p>
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
                                    <img src={d5} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-8 p-1 rounded-md'> $ 225</p>
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
                                    <img src={d1} className='w-[400px] h-[260px]' />
                                    <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-8 md:left-4 p-1 rounded-md'> $ 225</p>
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
            </div>

        </section>

    );
};

export default FindPuppy1;