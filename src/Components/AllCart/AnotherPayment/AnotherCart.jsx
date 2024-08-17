import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnotherCart = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pl-5 '>
            <div className='w-[400px] md:w-[850px] flex-col justify-center mx-auto my-4 col-span-2 shadow-2xl  p-4 mb-8 rounded-2xl '>
               <div className='flex justify-between'>  
                 <h1 className='text-2xl font-bold pt-4 '>Save Card:</h1> 
                 <button className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Add New Card</button>
               </div>
               <div className='w-2/3'>
               <div className='flex justify-between'>
                <img src="/src/assets/image/CardPayment/Card.png" alt="" />
                <img src="/src/assets/image/CardPayment/Card.png" alt="" />
                <img src="/src/assets/image/CardPayment/Card.png" alt="" />
               </div>
                <div className='flex-col justify-center items-center my-4  '>
                    <h1 className='text-lg'>Card Name</h1>
                    <input type="text" placeholder="Leton Nondi" className="input input-bordered border-[#FF5C2C] w-full" />
                    </div>
                    <div className='flex-col justify-center items-center my-4  '>
                    <h1 className='text-lg'>Card Number</h1>
                    <input type="text" placeholder="*********1245" className="input input-bordered border-[#FF5C2C] w-full" />
                    </div>
                <div className='flex justify-between space-x-4'>
                    <div className='w-full'>
                    <h1 className='text-lg'>Expire Date:</h1>
                    <input type="text" placeholder="20/30" className="input input-bordered border-[#FF5C2C] w-full " />
                    </div>
                    <div className='w-full'>
                    <h1 className='text-lg'>CVV</h1>
                    <input type="text" placeholder="20/30" className="input input-bordered border-[#FF5C2C] w-full " />
                    </div>
                    
                </div>
                <div className='my-8'>
                <button className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Payment</button>
                </div>


            </div>
            </div>
            <div>

                <div className='shadow-2xl  p-7 mb-8 rounded-2xl'>
                    <h1 className='text-lg md:text-2xl font-bold'>Order Summary</h1>
                    <div className='border-t-2 border-1 border-gray-300 mt-3 mb-6'></div>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-bold'>Subtotal</h1>
                        <h1>$98.00 </h1>
                    </div>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-bold'>discount</h1>
                        <h1>$0.00 </h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>Shipping Charge</h1>
                        <h1>$98.00 </h1>
                    </div>
                    <div className='border-t-2 border-1 border-gray-300 mt-3 mb-1'></div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-2xl'>Total</h1>
                        <h1 className='font-bold text-xl'>$98.00 </h1>
                    </div>

                    <div className="form-control my-10 flex-col ">
                        <label className="cursor-pointer flex space-x-2 label">
                            <input type="checkbox"  className="checkbox border-[#FF5C2C] " />
                            <p className="label-text">By placing your order, you agree with our company privacy policy and <span className='text-[#FF5C2C]'>condition</span> of use.</p>
                        </label>
                    </div>
                   
                        <div className="form-control rating justify-end ">
                            <div className="cursor-pointer flex space-x-5 my-2">

                                <input type="radio" name="radio" className="radio border-[#FF5C2C] radio-error bg-white "  />
                                <p className="label-text">Bank Transfer</p>
                            </div>
                            <div className="cursor-pointer flex space-x-5 my-2">

                                <input type="radio" name="radio" className="radio border-[#FF5C2C] radio-error bg-white" defaultChecked/>
                                <p className="text-left ml-20">Cash on Delivery </p>
                            </div>
                            <div className="cursor-pointer flex space-x-5 my-2">

                                <input type="radio" name="radio" className="radio border-[#FF5C2C] radio-error  bg-white" />
                                <p className="text-left">Credit / Debit card  </p>
                            </div>
                            <div className="cursor-pointer  flex space-x-5 my-2">

                                <input type="radio" name="radio" className="radio border-[#FF5C2C]  radio-error  bg-white" />
                                <span className="text-left">Online Payment </span>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 flex justify-center'>
                        <button onClick={() => navigate('/paymentMethod')} className="btn btn-wide bg-[#FF5C2C] text-white rounded-3xl">Place Order</button>
                    </div>

              
            </div>
        </div>
    );
};

export default AnotherCart;