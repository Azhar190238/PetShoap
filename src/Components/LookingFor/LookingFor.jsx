import React from 'react';

const LookingFor = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-20 '>
            <div className='text-center'>
                <h1 className='text-bold text-black text-3xl mb-4'>What Are You Looking For?</h1>
                <p className='text-[#938683] text-sm'>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily <br /> individual time in our large play yard.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-10 gap-4'>
                <div className='flex flex-col items-center'>

                    <div className='flex flex-col items-center'>
    <div className='relative flex justify-center items-center md:ml-44'>
        <div className='bg-[#7EC1F7] rounded-full w-[240px] h-[300px] flex justify-center items-center'>
            <img src="/src/assets/image/LookingFor/1.png" alt="Puppy 1" className='w-[220px] h-[320px] absolute bottom-1 left-0' />
        </div>
        <div className='absolute -bottom-20 -left-48'>
            <img src="/src/assets/image/LookingFor/left.png" alt="Left Decoration" className='' />
        </div>
    </div>
</div>


                    <div className='text-center md:ml-36 mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                        <p className='text-[#938683] text-sm'>Search the only source for 100% responsibly bred <br /> Bully purebred puppies.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-[#FE8E68] flex justify-center items-center rounded-full w-[240px] relative h-[300px]'>
                        <img src="/src/assets/image/LookingFor/2.png" alt="Puppy 2" className='w-[220px] h-[320px] absolute bottom-1 left-10' />
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                        <p className='text-[#938683] text-sm'>Search the only source for 100% responsibly bred <br /> Bully purebred puppies.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                   <div className='flex'>
                   <div className='bg-[#38C5D9] flex justify-center items-center rounded-full w-[240px] relative h-[300px]'>
                        <img src="/src/assets/image/LookingFor/3.png" alt="Puppy 2" className='w-[220px] h-[320px] absolute bottom-1 -left-2' />
                    </div>
                    <div>
                    <img src="/src/assets/image/LookingFor/right.png" alt="" className='' />
                   </div>
                   </div>
                    <div className='text-center md:mr-32 mt-4'>
                        <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                        <p className='text-[#938683] text-sm'>Search the only source for 100% responsibly bred <br /> Bully purebred puppies.</p>
                    </div>
                                   
                </div>

            </div>

        </div>
    );
};

export default LookingFor;