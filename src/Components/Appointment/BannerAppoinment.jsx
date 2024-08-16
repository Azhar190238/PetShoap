import React from 'react';

const BannerAppoinment = () => {
    return (
        <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-44   flex  justify-between relative'>
            <div className='ml-4 md:ml-14 flex flex-col items-center justify-center'>
                <div className='ml-16'>
                <h1 className='text-[#181818] font-bold text-3xl '>Appointment</h1>
                </div>
            
            <div className='flex space-x-2 pl-0'>
                <img src="/src/assets/image/productImage/home.png" alt="" />
                <p className='mt-3'>Home /<span className='text-[#FF5C2C]'> Shop</span></p>
            </div>
            </div>
            <div className='absolute right-0 bottom-0'>
                <img src="/src/assets/image/productImage/dog.png" alt="" className='w-64 md:w-full' />
            </div>
        </div>
    );
};

export default BannerAppoinment;