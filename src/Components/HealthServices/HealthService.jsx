import React from 'react';

const HealthService = () => {
    return (
        <section className='max-w-6xl mx-auto mt-10'>
            <div className='flex justify-center md:justify-end gap-8 font-bold mr-10'>
                <a className='text-[#61D5DF]' href=""><u>For Dog</u></a>
                <a href="">For Cat</a>
                <a href="">For Other</a>
            </div>
            <div className='flex flex-col md:flex-row justify-center mb-40 md:mb-20'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold mt-4 mb-4 md:mb-4 text-black text-center md:text-start'>Health and Wellness Services</h3>
                    <div className='flex gap-8 justify-center md:justify-start'>
                        <div className='flex gap-2 items-center'>
                            <img src="/src/assets/image/Health/i1.png" alt="" />
                            <p className='font-bold'>Eat</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src="/src/assets/image/Health/i2.png" alt="" />
                            <p className='font-bold'>Play</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src="/src/assets/image/Health/i3.png"alt="" />
                            <p className='font-bold'>Bath</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src="/src/assets/image/Health/i4.png" alt="" />
                            <p className='font-bold'>Sleep</p>
                        </div>
                    </div>
                    <p className='mt-8 w-full md:max-w-96 text-center md:text-start'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                    <li className="btn mt-8 rounded-3xl bg-[#FF5C2C] text-white font-bold p-4 ml-40 md:ml-0">Book Appointment </li>

                </div>
                <div className='flex-1 relative'>
                    <div className='absolute left-20 md:left-14 top-16 md:-bottom-48 rounded-3xl w-4/6 md:w-5/6 h-24 md:h-48 bg-[#F9A6AC]'>
                        <br />
                    </div>
                    <img className='absolute top-4 md:-bottom-32 left-36 md:left-28 w-2/5 md:w-2/3' src="/src/assets/image/Health/girl.png" alt="" />
                    <img className='absolute hidden md:flex -top-1 -right-14' src="/src/assets/image/Health/left.png" alt="" />
                            <img className='absolute hidden md:flex top-52 -left-4 rotate-180' src="/src/assets/image/Health/right.png" alt="" />
                </div>
            </div>
        </section>
    );
};


export default HealthService;