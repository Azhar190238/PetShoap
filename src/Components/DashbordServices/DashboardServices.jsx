import React from 'react';
import Banner from '../AllCart/Banner';
import { useNavigate } from 'react-router-dom';

const DashboardServices = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-4 gap-48'>
                    <div className='flex flex-col space-y-10 mb-10'>
                        <h1 className='text-3xl font-bold  my-8'>Dashbord</h1>
                        <a href="/findTrainer">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/profile.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Profile</h1>
                            </div></a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/pet.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Puppy’s</h1>
                            </div>
                        </a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/receipt-2.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold text-red-400 '>Services</h1>
                            </div>
                        </a>
                        <a href="/findPuppy1">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/shopping-cart.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Products</h1>
                            </div>
                        </a>
                        <a href="/dashbordReview">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/star.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold '>Reviews</h1>
                            </div>
                        </a>

                    </div>
                    <div className='col-span-3'>
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className='flex flex-col'>
                                <div className='flex justify-between my-10'>
                                    <h1 className='text-[#260E07] text-2xl  '>Showing 1-9 of 846 results</h1>
                                    <button onClick={() => navigate('/addNewForm')} className="btn join-item border-[#FF5C2C] text-[#FF5C2C] rounded-3xl px-6 ">Add New</button>
                                </div>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 '>

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
                </div>
            </div>
        </div>
    );
};

export default DashboardServices;