import React from 'react';

const ShopPate = () => {
    return (
        <div className='max-w-[1400px] mx-2 lg:mx-20 mb-20 '>
            <div className='text-center'>
                <h1 className='text-bold text-black text-3xl mb-4'>Shop by Peat</h1>
                <p className='text-[#938683] text-sm'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new <br /> friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center my-10 gap-1'>
                <div className='flex flex-col items-center  md:mr-36'>
                    <div className='flex flex-col items-center'>
                        <div className='relative flex justify-center items-center md:ml-44'>
                            <div className='bg-[#FF5C2C] rounded-full w-[180px] h-[140px] flex justify-center items-center'>
                                <img src="/src/assets/image/ShopPate/1.png" alt="Puppy 1" className='w-[100px] h-[100px] absolute bottom-0 md:bottom-1 ' />
                            </div>
                            <div className='absolute -bottom-20 -left-32'>
                                <img src="/src/assets/image/ShopPate/left.png" alt="Left Decoration" className='' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center ml-2 md:ml-36 mt-4'>
                        <h1 className='font-bold text-[#61D5DF] text-2xl mb-4'>DOG</h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-[#FFA58A] flex justify-center items-center rounded-full w-[180px] h-[140px] relative'>
                        <img src="/src/assets/image/ShopPate/2.png" alt="Puppy 2" className='w-[100px] h-[100px] absolute bottom-1 left-10' />
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>CAT</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-[#F9A6AC] flex justify-center items-center rounded-full w-[180px] h-[140px] relative'>
                        <img src="/src/assets/image/ShopPate/3.png" alt="Puppy 2" className='w-[100px] h-[100px] absolute bottom-1 left-10' />
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Birds</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-[#C2E0FA] flex justify-center items-center rounded-full w-[180px] h-[140px] relative'>
                        <img src="/src/assets/image/ShopPate/4.png" alt="Puppy 2" className='w-[100px] h-[100px] absolute bottom-1 left-10' />
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Rabbits</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-[#7EC1F7] flex justify-center items-center rounded-full w-[180px] h-[140px] relative'>
                        <img src="/src/assets/image/ShopPate/5.png" alt="Puppy 2" className='w-[100px] h-[100px] absolute bottom-1 left-10' />
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Fish</h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex relative'>
                        <div className='bg-[#38C5D9] flex justify-center items-center rounded-full w-[180px] h-[140px] relative '>
                            <img src="/src/assets/image/ShopPate/6.png" alt="Puppy 2" className='w-[100px] h-[100px] absolute bottom-1 -left-2' />
                        </div>
                        <div >
                            <img src="/src/assets/image/ShopPate/right.png" alt="" className='absolute -right-28 -top-20' />

                        </div>
                    </div>
                    <div className='text-center md:mr-32 mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Reptile</h1>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ShopPate;