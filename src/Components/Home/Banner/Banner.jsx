import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row max-w-[1400px] sm:mx-2 mx-auto mb-20 mt-10  gap-8'>
            <div className='flex-1 pl-12 pt-20 space-y-4'>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Established & Trusted Pet <br /> Care Service</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus amet molestiae ratione eaque. Deleniti impedit, mollitia ab</p>
                <a className='btn rounded-3xl bg-[#FF5C2C] text-white font-bold px-10'>
                    Find Now
                </a>
            </div>
            <div className='flex-1'>
                <div className='relative'>
                    <img src="/src/assets/image/BannerPic/cat4.png" alt="" />
                    <div className='absolute top-80 sm:top-auto md:top-96  sm:right-12  lg:-right-10'>
                        <img src="/src/assets/image/BannerPic/cat3.png" alt="Small Cat" className='w-36 h-44 sm:w-44 sm:h-44 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain' />
                    </div>

                    <div className='absolute top-0 right-0'>
                        <img src="/src/assets/image/BannerPic/circle.png" alt="" />
                    </div>
                    <div className='absolute bottom-0 -left-32 rotate-180'>
                        <img src="/src/assets/image/BannerPic/circle.png" alt="" />
                    </div>
                    <div className='absolute -bottom-20 left-36 py-10 pl-5 bg-white shadow-lg border rounded-xl '>
                        <div className='flex space-x-2 pr-2 md:pr-24 lg:pr-36'>
                            <div>
                                <img src="/src/assets/image/BannerPic/sm1.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Cat Food</h1>
                                <p className='text-sm font-thin'>Lorem spam</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className='flex space-x-2 pr-2 md:pr-24 lg:pr-36'>
                            <div>
                                <img src="/src/assets/image/BannerPic/sm2.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Dog Food</h1>
                                <p className='text-sm font-thin'>Lorem spam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;