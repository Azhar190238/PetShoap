import React from 'react';
import Banner from '../Shared/Banner/Banner';

const Overview1 = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex items-center gap-4'>
                    <div className='rounded-full bg-[#FF5C2C] p-3'>
                        <p className='text-white h-3 w-4 pb-4 pl-1'>1</p>
                    </div>
                    <p className='text-[#FF5C2C] font-bold'>Overview</p>
                </div>
                <div className='w-full h-px bg-[#FF5C2C] mt-3 mb-3'> <br /> </div>
                <div className='w-2/3 bg-[#FF5C2C1A] border border-[#FF5C2C] rounded-lg mt-10 p-4 mb-10'>
                    <h3 className='font-bold'>Service Tittle</h3>
                    <p className='text-[#938683] w-full md:w-2/3 mt-4'>As your service storefront, your tittle is most important place to includes keywords that buyers would likely use to search for a service like yours.  </p>
                    <input className='border border-[#ACB5BD] bg-[#FF5C2C1A] p-3 mt-4 rounded-lg w-full md:w-2/3' type="text" placeholder='write here some information' />

                    <h3 className='font-bold mt-10'>Category</h3>
                    <p className='text-[#938683] w-full md:w-2/3 mt-4'>Choose the category and subcategory most suitable for your service</p>
                    <input className='border border-[#ACB5BD] bg-[#FF5C2C1A] p-3 mt-4 rounded-lg w-full md:w-1/3' type="text" placeholder='write here some information' />


                    <h3 className='font-bold mt-10'>Positive Keywords</h3>
                    <p className='text-[#938683] w-full md:w-2/3 mt-4'>Enter search terms you feel your buyers will use when looking for your service.</p>
                    <input className='border border-[#ACB5BD] bg-[#FF5C2C1A] p-3 mt-4 rounded-lg w-full md:w-2/3' type="text" placeholder='write here some information' />
                    <p className='text-[#938683] w-full md:w-2/3'>5 tags max</p>
                    <div className='w-full md:w-2/3'>
                        <div className='flex justify-between'>
                            <div></div>
                            <a href="/overView2"><button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Continue</button>                    </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview1;