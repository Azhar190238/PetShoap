import React from 'react';
import Banner from '../Shared/Banner/Banner';
import finished from '../../assets/image/dashboardPyppys/finished.png'

const OverView5 = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto mb-10 mt-40'>
                <div className='flex gap-5 md:gap-10'>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full bg-[#FF5C2C] p-3'>
                            <p className='text-white h-3 w-4 pb-4 pl-1'>1</p>
                        </div>
                        <p className='text-[#FF5C2C] font-bold'>Overview</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>2</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Description & FAQ</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>3</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Publish</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>4</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Glary</p>
                    </div>

                </div>
                <div className='w-full h-px bg-[#FF5C2C] mt-3 mb-3'> <br /> </div>
                <div className='mx-auto w-2/4 rounded-lg border border-[#FF5C2C]'>
                    <img className='mx-auto' src={finished} alt="" />
                    <p className='font-bold text-xl text-center'>You’re almost there!</p>
                    <p className='text-[#938683] text-center pb-4'>Let’s publish your Gig and get you ready to start selling.</p>
                </div>
                <div className='mt-8 w-2/4 mx-auto'>
                        <div className='flex justify-between'>
                            <div></div>
                            <a href="/"><button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Publish Service</button>                    </a>
                        </div>
                    </div>
            </div>

        </section>
    );
};

export default OverView5;