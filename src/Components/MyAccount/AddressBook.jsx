import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import Banner from '../Shared/Banner/Banner';
const AddressBook = () => {
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
                            <a href="/addressBook"><p className='mt-2 text-[#FF5C2C] font-bold'>Address Book</p></a>
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
                    <div className='col-span-3 mt-7'>
                        <div className='flex justify-between px-2 mb-2'>
                            <h4 className='font-bold text-xl'>Address Book</h4>
                            <h4 className='font-bold text-xl'>+ Add a new Address</h4>
                        </div>
                        <div className='flex justify-between bg-[#FF5C2C33] px-4 py-8 rounded-lg'>
                            <div className=''>
                                <h4 className='font-bold text-xl'>Loton Nondi</h4>
                                <p className='mt-2 text-[#9da6b1] font-bold'>Chulkathi Bazer Khulna - Bagerhat - Foyla <br /> + 1 235 4654 326</p>
                            </div>
                            <div className=''>
                                <h4 className='font-bold'><span className='text-[#FF5C2C]'>Edit</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddressBook;