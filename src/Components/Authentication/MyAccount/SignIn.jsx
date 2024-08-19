import React from 'react';
import Banner from '../../AllCart/Banner';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
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
                        <p className=' text-[#938683]'>Please sign in to access your full account</p>
                    </div>
                    <div className='flex-col justify-center items-center my-4'>
                        <h1 className='text-lg'>Username or email*</h1>
                        <input type="text" placeholder="azhar1938" className="input input-bordered border-[#FF5C2C] w-full rounded-3xl" />
                    </div>
                    <div className='flex-col justify-center items-center my-4 relative'>
                        <h1 className='text-lg'>Password*</h1>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="******"
                            className="input input-bordered border-[#FF5C2C] w-full rounded-3xl"
                        />
                        <div
                            className='absolute top-2/3 right-4 transform -translate-y-1/2 cursor-pointer'
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-3">
                    
                        
                        <input type="checkbox" className="checkbox checkbox-success border-red-400" />
                        <p className="">Remember me</p>
                    
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <button className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Sign In</button>
                    <a href="/forget" className='text-[#FFA58A] text-3xl font-semibold'>Lost your password</a>
                </div>
            </div>

        </div>
    );
};

export default SignIn;
