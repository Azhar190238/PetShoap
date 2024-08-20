import React from 'react';

const BillingHistory = () => {
    return (
        <section className='mt-8 p-3 '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='col-span-3 gap-4'>
                    <div className='flex '>
                        <select className=' w-full p-3 border border-red-600 rounded-lg' name="" id="">
                            <option value="a">Data Range</option>
                            <option value="a">Female</option>
                        </select>
                        <select className='w-full ml-3 p-3 border border-red-600 rounded-lg' name="" id="">
                            <option value="a">Transaction</option>
                            <option value="a">Female</option>
                        </select>
                        <select className='w-full ml-3 p-3 border border-red-600 rounded-lg' name="" id="">
                            <option value="a">Service</option>
                            <option value="a">Female</option>
                        </select>
                        <select className='w-full ml-3 p-3 border border-red-600 rounded-lg' name="" id="">
                            <option value="a">Country</option>
                            <option value="a">Female</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="input input-bordered border-red-600 flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

            </div>
            <h4 className='text-xl font-bold mt-16'>Showing Result 2</h4>
            <div className='h-80 border border-[#FF5C2C] rounded-lg'>
                <div className='flex justify-between bg-[#FF5C2C33] p-3 rounded-lg'>
                    <p>Data</p>
                    <p>Transaction</p>
                    <p>Service</p>
                    <p>Order</p>
                    <p>Currency</p>
                    <p>Total</p>
                </div>
            </div>
        </section>
    );
};

export default BillingHistory;