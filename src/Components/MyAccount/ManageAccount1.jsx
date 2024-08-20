import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import Banner from '../Shared/Banner/Banner';

const ManageAccount1 = () => {
    return (
        <section>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 p-3 mt-32 gap-8'>
                    <div>
                        <h4 className='text-xl font-bold'>Hello, Leton Nondi</h4>
                        <a href=""><h4 className='mt-8 text-xl font-bold'>Manage My Account</h4></a>
                        <div className='mt-8'>
                            <a href="/myProfile"><p className='mt-2 text-[#9da6b1] font-bold'>My Profile</p></a>
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
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Manage my Account</h4>
                        <div className='bg-[#FF5C2C1A] rounded-lg p-4'>
                            <h4 className='font-bold'>Personal Profile | EDIT</h4>
                            <div className='mt-4'>
                                <a href=""><p className='mt-2 text-[#9da6b1] font-bold'>Leton Nondi</p></a>
                                <a href=""><p className='mt-2 text-[#9da6b1] font-bold'>letonnondi@gmail.com</p></a>
                            </div>
                            <h4 className='mt-10 font-bold text-[15px] pb-8 text-[#FF5C2C]'>Subscribe Our Newsletter</h4>
                        </div>
                    </div>
                    <div className='col-span-2 mt-7'>
                        <div className='flex justify-between gap-4 bg-[#FF5C2C1A] rounded-lg'>
                            <div className='flex-1 rounded-lg p-4'>
                                <h4 className='font-bold'>Address Book | <span className='text-[#FF5C2C]'>EDIT</span></h4>
                                <p className='mt-2 text-[#9da6b1]  uppercase'>DEFOULT SHIPPING ADDRESS</p>
                                <h4 className='font-bold mt-12'>Liton Nondi </h4>
                                <div className='mt-4'>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>Chulkathi Bazer Khulna - Bagerhat </p>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>+ 1 235 4654 326</p>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal py-8"></div>
                            <div className='flex-1 rounded-lg p-4'>
                                <p className='mt-6 text-[#9da6b1]  uppercase'>DEFOULT SHIPPING ADDRESS</p>
                                <h4 className='font-bold mt-12'>Liton Nondi </h4>
                                <div className='mt-4'>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>Chulkathi Bazer Khulna - Bagerhat </p>
                                    <p className='mt-2 text-[#9da6b1] font-bold'>+ 1 235 4654 326</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ManageAccount1;