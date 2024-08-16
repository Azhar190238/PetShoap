import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const OurCard = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(40);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className='max-w-[1320px] mx-auto mt-10'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='my-4 w-1/3'>
                    <h1 className='pl-4 text-3xl font-bold'>Product</h1>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <p className='pl-4'>Reset</p>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">Category</summary>
                            <div className="collapse-content">
                                <p> <input type="radio" name='1' className='Radio' /> A </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> B</p><br />
                                <p> <input type="radio" name='1' className='Radio' /> C </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> D </p><br />


                            </div>
                        </details>
                    </div>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">Brand</summary>
                            <div className="collapse-content">
                                <p> <input type="radio" name='1' className='Radio' /> A </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> B</p><br />
                                <p> <input type="radio" name='1' className='Radio' /> C </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> D </p><br />


                            </div>
                        </details>
                    </div>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">Health Consideration</summary>
                            <div className="collapse-content">
                                <p> <input type="radio" name='1' className='Radio' /> A </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> B</p><br />
                                <p> <input type="radio" name='1' className='Radio' /> C </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> D </p><br />


                            </div>
                        </details>
                    </div>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">Flavor</summary>
                            <div className="collapse-content">
                                <p> <input type="radio" name='1' className='Radio' /> A </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> B</p><br />
                                <p> <input type="radio" name='1' className='Radio' /> C </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> D </p><br />


                            </div>
                        </details>
                    </div>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">High Protein</summary>
                            <div className="collapse-content">
                                <p> <input type="radio" name='1' className='Radio' /> A </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> B</p><br />
                                <p> <input type="radio" name='1' className='Radio' /> C </p><br />
                                <p> <input type="radio" name='1' className='Radio' /> D </p><br />


                            </div>
                        </details>
                    </div>
                    <div className="border-y-1 ml-4 border-gray-500 border-[1px]"></div>
                    <div className="relative text-left">
                        <details className="collapse collapse-arrow ">
                            <summary className="collapse-title text-xl font-medium">Price Range</summary>
                            <div className=" mx-auto mt-1 ml-4">
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={value}
                                    onChange={handleChange}
                                    className="range range-secondary range-xs"
                                />
                                <p>Selected Value: {value}</p>
                            </div>
                        </details>
                    </div>


                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[#260E07] text-2xl my-10 '>Showing 1–12 of 76 results</h1>
                        <div className='flex justify-center space-x-4 items-center'>
                            <p>Short by</p>
                            <button className="btn text-white  rounded-2xl bg-[#FF5C2C]">Default</button>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>

                        {/* <div> */}
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#FF5C2C] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/1.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/2.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#61D5DF] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
                                <img src="/src/assets/image/Products/image 17.png" alt="Puppy 2" className='' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='font-bold text-black text-2xl mb-4'>Find Puppies</h1>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 mb-3 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-[#938683] text-sm'>$ 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCard;