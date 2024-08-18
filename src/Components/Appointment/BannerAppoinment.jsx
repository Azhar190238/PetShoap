import React from 'react';

const BannerAppoinment = () => {
    return (
        <div className='bg-[#61D5DF]'>
            <div className='max-w-[1320px] mx-auto h-60 w-full mb-20 mt-44  flex justify-between relative'>
            <div className=' flex flex-col  justify-center'>
                <div className=''>
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
        </div>
    );
};

export default BannerAppoinment;