import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountForm = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1050px] mx-auto flex-col justify-center  my-4 col-span-2 '>
            <div className=''>
                <h1 className='text-3xl font-bold text-center my-8'>My Account</h1>
                <div className="join flex justify-center  ">
                    
                    <button  onClick={()=> navigate('/signIn')} className="btn join-item bg-[#ff5c2c1c] rounded-3xl px-6 ">Sign IN</button>
                    <button onClick={()=> navigate('/register')} className="btn join-item bg-[#FF5C2C] rounded-3xl px-6">Register</button>
                   
                    
                    
                </div>
            </div>

            <div className=''>
                <div className='flex-col justify-center  items-center my-4 space-y-4  '>
                    <h1 className='text-xl font-bold'>Create Account</h1>
                    <p className='max-w-[450px] text-[#938683]'>Your personal data will be used to support your experience throughout this website,
                        to manage access to your account, and for other purposes described in our privacy policy.</p>
                </div>
                <div className='flex-col justify-center items-center my-4  '>
                    <h1 className='text-lg'>Username or email*</h1>
                    <input type="text" placeholder="azhar1938" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                </div>
                <div className='flex-col justify-center items-center my-4  '>
                    <h1 className='text-lg'>Password*</h1>
                    <input type="text" placeholder="******" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                </div>
                <div className='flex-col justify-center items-center my-4  '>
                    <h1 className='text-lg'>Email address*</h1>
                    <input type="text" placeholder="example1938@gmail.com" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                </div>

            </div>
            <div className='my-6'>
                <button className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Create Account</button>
            </div>
        </div>
    );
};

export default AccountForm;