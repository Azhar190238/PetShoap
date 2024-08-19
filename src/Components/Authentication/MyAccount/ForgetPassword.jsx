import React from 'react';
import Banner from '../../AllCart/Banner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
const navigate = useNavigate();
return (
    <div >
        <Banner></Banner>
        <div className='max-w-[1050px] mx-auto flex-col justify-center  my-4 col-span-2'>
            <div className=''>
                <h1 className='text-3xl font-bold text-center my-8'>My Account</h1>
                <div className="join flex justify-center  ">

                    <button onClick={() => navigate('/signIn')} className="btn join-item bg-[#FF5C2C] rounded-3xl px-6 ">Sign IN</button>
                    <button onClick={() => navigate('/register')} className="btn join-item  bg-[#ff5c2c1c] rounded-3xl px-6">Register</button>



                </div>
            </div>

            <div className=''>
                <div className='flex-col justify-center text-center  items-center my-8 space-y-4  '>
                    <h1 className='text-2xl font-bold'>Welcome Back</h1>
                </div>

                <div className='flex-col justify-center items-center my-4'>
                    <h1 className='text-lg'>New Password</h1>
                    <input type="text" placeholder="******" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                </div>
                <div className='flex-col justify-center items-center my-4'>
                    <h1 className='text-lg'>Confirm Password</h1>
                    <input type="text" placeholder="******" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                </div>

            </div>
            <div className='my-6'>
                <button onClick={() => navigate('/reset')} className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Reset password</button>
            </div>
        </div>

    </div>
);
};

export default ForgetPassword;
