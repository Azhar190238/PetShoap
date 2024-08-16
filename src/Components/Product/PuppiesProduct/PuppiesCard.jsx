import React from 'react';
import { useNavigate } from 'react-router-dom';

const PuppiesCard = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1320px] mx-auto mt-10'>
            <div className='flex items-center justify-center space-x-4'>
                <button onClick={() => navigate('/product')} className="btn  md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C] ">Puppies</button>
                <button
                    onClick={() => navigate('/services')}
                    className="btn md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C]"
                >
                    Services
                </button>

                <button onClick={() => navigate('/puppyProducts')} className="btn md:btn-wide  bg-[#FF5C2C] text-white ">Products</button>
            </div>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-[#260E07] text-2xl my-10 '>Showing 1-9 of 846 results</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                        {/* <div> */}
                        <div className='flex flex-col items-center shadow-xl mb-4'>
                            <div className='bg-[#FE8E68] flex justify-center items-center w-[420px] h-[320px] rounded-xl  '>
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
                            <div className='bg-[#61D5DF] flex justify-center items-center  w-[420px] h-[320px] rounded-xl  '>
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
                        
        
                        
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PuppiesCard;