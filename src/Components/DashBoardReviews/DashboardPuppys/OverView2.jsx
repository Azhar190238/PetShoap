import React from 'react';
import Banner from '../Shared/Banner/Banner';

const OverView2 = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto my-10'>
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

                <div className='mt-10 flex justify-between px-3'>
                    <div></div>
                    <div className='flex gap-3'>
                        <p className='text-[#FF5C2C] font-bold'>Offer Packages</p>
                        <input type="checkbox" className="toggle toggle-error" />
                    </div>
                </div>
                <div className='w-full h-px bg-[#FF5C2C] mt-3 mb-3'> <br /> </div>

                <h4 className='font-bold mt-10'>Shop See examples</h4>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table border-red-600 text-center ">
                            <tr className=' hover font-bold border border-red-600 text-xl bg-[#FFEBE3]'>
                                <td className=' border border-red-600' rowspan={4}></td>
                                <td className=' border border-red-600'>BASIC</td>
                                <td className='border border-red-600'>Standard</td>
                                <td className='border border-red-600'>Premium</td>
                            </tr>

                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600'>Name Your Package</td>
                                <td className='border border-red-600'>Name Your Package</td>
                                <td className='border border-red-600'>Name Your Package</td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600'>Describe the details of <br />
                                    your offering</td>
                                <td className=' border border-red-600'>Describe the details of <br />
                                    your offering</td>
                                <td className=' border border-red-600'>Describe the details of <br />
                                    your offering</td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600'>Delivery Time</td>
                                <td className=' border border-red-600'>Delivery Time</td>
                                <td className=' border border-red-600'>Delivery Time</td>
                            </tr>

                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover border border-red-600">
                                <td className=' border border-red-600 bg-[#FFEBE3]'>Haircut</td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                                <td className=' border border-red-600'>
                                    <div className="form-control">
                                        <input type="checkbox" className="checkbox checkbox-error mx-auto" />
                                    </div>
                                </td>
                            </tr>


                        </table>
                    </div>
                </div>
                <div className='rounded-lg bg-[#FFEBE3] border border-[#FF5C2C] mt-32 p-3'>
                    <div className='flex justify-between items-center px-0 md:px-40'>
                        <p className='font-bold'>Basic</p>
                        <input className='p-3 rounded-lg' type="text" placeholder='$' />
                    </div>
                    <div className='flex justify-between items-center px-0 md:px-40 mt-8'>
                        <p className='font-bold'>Standard</p>
                        <input className='p-3 rounded-lg' type="text" placeholder='$' />
                    </div>
                    <div className='flex justify-between items-center px-0 md:px-40 mt-8'>
                        <p className='font-bold'>Premium</p>
                        <input className='p-3 rounded-lg' type="text" placeholder='$' />
                    </div>

                </div>
                <div className='mt-8'>
                    <div className='flex justify-between'>
                        <div></div>
                        <a href="/overView3"><button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Continue</button>                    </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OverView2;