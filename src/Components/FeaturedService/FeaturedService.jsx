import React from 'react';

const FeaturedService = () => {
    return (
<section className='max-w-6xl mx-auto mb-20 md:mt-40'>
            <div className='flex flex-col md:flex-row justify-center gap-20'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-4 text-black'>Featured Services</h3>
                    <p>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
                    <div className='grid grid-cols-2 mt-8 gap-12 items-start pb-0 md:pb-20'>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src="/src/assets/image/FeatuedService/g4.png" alt="" />
                            </div>
                            <div>
                                <h4 className='font-bold text-xl text-black'>Grooming</h4>
                                <p>Your pet is in good hands with us!</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src="/src/assets/image/FeatuedService/g3.png" alt="" />
                            </div>
                            <div>
                                <h4 className='font-bold text-xl text-black'>Dog Sitting</h4>
                                <p>Your pet is in good hands with us!</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src="/src/assets/image/FeatuedService/g2.png" alt="" />
                            </div>
                            <div>
                                <h4 className='font-bold text-xl text-black'>Training</h4>
                                <p>Your pet is in good hands with us!</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <img src="/src/assets/image/FeatuedService/g1.png" alt="" />
                            </div>
                            <div>
                                <h4 className='font-bold text-xl text-black'>Veterinary</h4>
                                <p>Your pet is in good hands with us!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex-1 justify-center lg:justify-end'>
                    <div className='md:absolute mt-16 md:mt-0 md:bottom-0 left-4 rounded-md w-[470px] md:w-4/5 h-[335px] bg-[#F9A6AC]'>
                        <br />
                    </div>
                    <img className='absolute right-0 md:right-20 bottom-0 ml-0 md:ml-4 lg:ml-32 w-3/4' src="/src/assets/image/FeatuedService/girl.png" alt="" />
                    <div className='absolute -top-12 md:top-0 left-o md:-left-20 rounded-md w-[150px] h-[160px] bg-[#7EC1F7] text-white font-bold text-center p-3'>
                        <span className='text-center font-extrabold text-3xl'> 50+ </span> <br /> <br />
                        <span className='text-2xl'>Services</span> <br /> <br />
                        <span>Available</span>
                    </div>
                    <div className='absolute hidden lg:flex top-14 right-7'>
                        <img src="/src/assets/image/FeatuedService/right.png" alt="" />
                    </div>
                    <div className='absolute bottom-0 -left-12 rotate-180'>
                        <img src="/src/assets/image/FeatuedService/left.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;