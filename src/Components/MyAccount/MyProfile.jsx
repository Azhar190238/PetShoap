import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import Banner from '../Shared/Banner/Banner';

const MyProfile = () => {
    return (
        <section>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 p-3 mt-32 rounded-lg '>
                    <div>
                        <h4 className='text-xl font-bold'>Hello, Leton Nondi</h4>
                        <a href="/manageAccount1"><h4 className='mt-8 text-xl font-bold'>Manage My Account</h4></a>
                        <div className='mt-8'>
                            <a href="/myProfile"><p className='mt-2 text-[#FF5C2C] font-bold'>My Profile</p></a>
                            <a href="/addressBook"><p className='mt-2 text-[#9da6b1] font-bold'>Address Book</p></a>
                            <a href="/myPaymentOption"><p className='mt-2 text-[#9da6b1] font-bold'>MY Payment Options </p></a>
                            <a href="/vouchers"><p className='mt-2 text-[#9da6b1] font-bold'>Vouchers</p></a>
                        </div>
                        <h4 className='mt-8 text-xl font-bold'>My Orders</h4>
                        <div className='mt-8'>
                            <a href="/myReturn"><p className='mt-2 text-[#9da6b1] font-bold'>My Returns</p></a>
                            <a href="/myCancelation"><p className='mt-2 text-[#9da6b1] font-bold'>My Cancelation</p></a>
                        </div>
                        <a href="/myReview"><h4 className='mt-8 text-xl font-bold'>My Review</h4></a>
                        <h4 className='mt-8 text-xl font-bold'>Sell with us</h4>
                        myReview
                    </div>
                    <div className=''>
                        <h4 className='text-xl font-bold'>My Profile</h4>
                        <div className='bg-[#FF5C2C33] p-4'>
                            <div className='mt-8'>
                                <h4 className='font-bold'> Full Name</h4>
                                <p className='mt-2 text-[#9da6b1] font-bold'>Liton Nondi</p>
                            </div>
                            <div className='mt-8'>
                                <h4 className='font-bold'>Birth Day</h4>
                                <p className='mt-2 text-[#9da6b1] font-bold'>23/12/2000</p>
                            </div>
                            <h4 className='mt-10 font-bold text-[15px] text-[#FF5C2C]'>Subscribe Our Newsletter</h4>
                            <div className='mt-4 flex flex-col gap-3'>
                                <button className='btn btn-outline rounded-3xl text-white font-bold bg-[#FF5C2C] px-10 w-2/3 '>Edit Profile</button>
                                <button className='btn btn-outline rounded-3xl text-white font-bold bg-[#FF5C2C] w-2/3'>Change Password</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 mt-7'>
                        <div className='flex justify-between gap-4 bg-[#FF5C2C33] h-96'>
                            <div className='flex-1 rounded-lg p-4'>
                                <div className='mt-8'>
                                    <h4 className='font-bold'>Email Address | <span className='text-[#FF5C2C]'>Change</span></h4>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>litonondi@gamil.com</p>
                                </div>
                                <div className='mt-8'>
                                    <h4 className='font-bold'>Gender</h4>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>Male</p>
                                </div>
                            </div>
                            {/* <div className="divider lg:divider-horizontal py-8"></div> */}
                            <div className='flex-1 rounded-lg p-4'>
                                <div className='mt-8'>
                                    <h4 className='font-bold'>Phone Number | <span className='text-[#FF5C2C]'>Change</span></h4>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>01980-445424</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyProfile;