import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import reviewer from '../../assets/image/myAccount/reviewer.png'
import Banner from '../Shared/Banner/Banner';
const MyReview = () => {
    return (
        <section>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 p-3 mt-32 rounded-lg '>
                    <div>
                        <h4 className='text-xl font-bold'>Hello, Leton Nondi</h4>
                        <a href="/manageAccount1"><h4 className='mt-8 text-xl font-bold'>Manage My Account</h4></a>
                        <div className='mt-8'>
                            <a href="/myProfile"><p className='mt-2 text-[#9da6b1]  font-bold'>My Profile</p></a>
                            <a href="/addressBook"><p className='mt-2 text-[#9da6b1] font-bold'>Address Book</p></a>
                            <a href="/myPaymentOption"><p className='mt-2 text-[#9da6b1] font-bold'>MY Payment Options </p></a>
                            <a href="/vouchers"><p className='mt-2 text-[#9da6b1] font-bold'>Vouchers</p></a>
                        </div>
                        <h4 className='mt-8 text-xl font-bold'>My Orders</h4>
                        <div className='mt-8'>
                            <a href="/myReturn"><p className='mt-2 text-[#9da6b1] font-bold'>My Returns</p></a>
                            <a href="/myCancelation"><p className='mt-2 text-[#9da6b1] font-bold'>My Cancelation</p></a>
                        </div>
                        <a href="/myReview"><h4 className='mt-8 text-xl font-bold text-[#FF5C2C]'>My Review</h4></a>
                        <h4 className='mt-8 text-xl font-bold'>Sell with us</h4>
                    </div>
                    <div className='col-span-3  '>
                        <h4 className='font-bold text-xl mb-3'>My Review</h4>
                        <div className='bg-[#FF5C2C33] rounded-lg'>
                            <div className=' '>
                                <div className='flex p-4 gap-5'>
                                    <div>
                                        <img src={reviewer} alt="" />
                                    </div>
                                    <div className=''>
                                        <h4 className='  text-xl font-bold'>Liton Nondi</h4>
                                        <div className="mt-3 rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='mt-3 text-[#9da6b1]'>June 7, 2013</p>
                                        <p className=' mt-3 text-[#9da6b1] '>This will go great with my Hoodie that I ordered a few weeks ago.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex p-4 gap-5'>
                                    <div>
                                        <img src={reviewer} alt="" />
                                    </div>
                                    <div className=''>
                                        <h4 className='  text-xl font-bold'>Liton Nondi</h4>
                                        <div className="mt-3 rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='mt-3 text-[#9da6b1]'>June 7, 2013</p>
                                        <p className=' mt-3 text-[#9da6b1] '>This will go great with my Hoodie that I ordered a few weeks ago.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReview;