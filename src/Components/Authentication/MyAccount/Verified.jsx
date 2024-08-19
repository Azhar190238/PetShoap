import React from 'react';
import Banner from '../../AllCart/Banner';

const Verified = () => {
    return (
        <div>
           <Banner></Banner> 
           <div className='max-w-[1050px] mx-auto flex-col justify-center  my-4 col-span-2'>
            <div className=''>
                <h1 className='text-3xl font-bold text-center my-8'>My Account</h1>
                <div className="join flex justify-center  ">

                    <button onClick={() => navigate('/signIn')} className="btn btn-wide join-item bg-[#FF5C2C] rounded-3xl px-6 ">Sign IN</button>
                    <button onClick={() => navigate('/register')} className="btn  btn-wide join-item  bg-[#ff5c2c1c] rounded-3xl px-6">Register</button>



                </div>
            </div>

            <div className='flex flex-col justify-center items-center my-10 space-y-5'>
            <img src="/src/assets/image/MyAccount/verified.png" alt="" className='max-w-[300px]' />
            <h1 className='text-2xl font-bold text-center my-8'>Verified</h1>
            <h2 className='text-[#938683] text-2xl text-center'>Your account has been <br />
            verified successfully!</h2>

            </div>
            <div className='my-6 flex  justify-center items-center'>
                <button onClick={() => navigate('/reset')} className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Done</button>
            </div>
        </div>
        </div>
    );
};

export default Verified;
