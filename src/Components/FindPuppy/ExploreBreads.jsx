import React from 'react';
import expDog from '../../assets/image/pussyService/expDog.png'
import expDog2 from '../../assets/image/pussyService/dog2.png'
import expDog3 from '../../assets/image/pussyService/dog3.png'
const ExploreBreads = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-10 pl-10 '>
            <h1 className='text-[#260E07] text-3xl my-3  font-bold '>Explore other Breeds</h1>
            <p className='pb-4'>Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. <br /> Neceessitatibus sonet soluta,</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-80 gap-20 mb-8'>
                <div className='relative flex flex-col mb-60 md:mb-60 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#FF5C2C] w-60 rounded-full'>
                            <img className='w-60 p-3' src={expDog} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier1</p>
                    </div>
                </div>
                <div className='relative flex flex-col mb-60 md:mb-60 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#61D5DF] w-60 rounded-full'>
                            <img className='w-60 p-6' src={expDog2} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier2</p>
                    </div>
                </div>
                <div className='relative flex flex-col mb-60 md:mb-0 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#F9A6AC] w-60 rounded-full'>
                            <img className='w-60 p-6' src={expDog3} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier3</p>
                    </div>
                </div>
                <div className='relative flex flex-col'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#FFA58A] w-60 rounded-full'>
                            <img className='w-60 p-3' src={expDog} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreBreads;