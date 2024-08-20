import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import item1 from '../../assets/image/myAccount/Item_01.png'
import Banner from '../Shared/Banner/Banner';

const MyCancelation = () => {
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
                            <a href="/myCancelation"><p className='mt-2 text-[#FF5C2C] font-bold'>My Cancelation</p></a>
                        </div>
                        <a href="/myReview"><h4 className='mt-8 text-xl font-bold'>My Review</h4></a>
                        <h4 className='mt-8 text-xl font-bold'>Sell with us</h4>
                    </div>
                    <div className='col-span-3 mt-7'>
                        <h4 className='font-bold text-xl mb-3'>My Cancellation</h4>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-[#FF5C2C33] font-bold rounded-3xl'>
                                        <tr className=''>
                                            <th>#Order</th>
                                            <th>Place on</th>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>6423135631463123</th>
                                            <td>12/10/23</td>
                                            <td><img src={item1} alt="" /></td>
                                            <td>$45.99</td>
                                            <td className='text-[#FF5C2C]'>Canceled</td>
                                        </tr>
                                        <tr>
                                            <th>6423135631463123</th>
                                            <td>12/10/23</td>
                                            <td><img src={item1} alt="" /></td>
                                            <td>$45.99</td>
                                            <td className='text-[#FF5C2C]'>Canceled</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyCancelation;