

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(40);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className='max-w-[1320px] mx-auto mt-10'>
            <div className='flex items-center justify-center space-x-4'>
                <button className="btn  md:btn-wide bg-[#FF5C2C] text-white">Puppies</button>
                <button
                    onClick={() => navigate('/services')}
                    className="btn md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C]"
                >
                    Services
                </button>
                
                <button onClick={ ()=> navigate('/puppyProducts')} className="btn md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C]">Products</button>  
                </div>
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
              <div>
                <h1 className='text-[#260E07] text-2xl my-10 '>Showing 1-9 of 846 results</h1>
                </div>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                
             {/* <div> */}
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]'/>
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
      {/*           </div> */}
             </div>
             {/* <div></div> */}
             </div>
            </div>
            </div>
        </div>
    );
};

export default Card;

