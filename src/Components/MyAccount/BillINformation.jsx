import React from 'react';

const BillINformation = () => {
    return (
        <section className='mt-8 p-3'>
            <div className='grid grid-cols-1 md:grid-cols-4 '>
                <div className='col-span-3'>
                    <select className=' w-full mt-3 p-3 border border-red-600 rounded-lg' name="" id="">
                        <option value="a">Data Range</option>
                        <option value="a">Female</option>
                    </select>
                    <select className=' w-full mt-6 p-3 border border-red-600 rounded-lg' name="" id="">

                    </select>
                    <select className=' w-full mt-6 p-3 border border-red-600 rounded-lg' name="" id="">
                        <option value="a">Data Range</option>
                        <option value="a">Female</option>
                    </select>
                    <input className='w-full mt-6 p-3 border border-red-600 rounded-lg' type="text" placeholder='Write Your Information' />
                    <select className=' w-full mt-6 p-3 border border-red-600 rounded-lg' name="" id="">
                        <option value="a">Data Range</option>
                        <option value="a">Female</option>
                    </select>
                    <select className=' w-full mt-6 p-3 border border-red-600 rounded-lg' name="" id="">

                    </select>
                    <div className='flex gap-4'>
                        <input className='w-full mt-6 p-3 border border-red-600 rounded-lg' type="text" placeholder='Write Your Information' />
                        <input className='w-full mt-6 p-3 border border-red-600 rounded-lg' type="text" placeholder='Write Your Information' />
                    </div>
                    <input className='w-full mt-6 p-3 border border-red-600 rounded-lg' type="text"  />
                    <input className='w-full mt-6 p-3 border border-red-600 rounded-lg' type="text"  />
                    <div className='flex justify-between mt-10'>
                        <button></button>
                        <button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Save Changes</button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default BillINformation;