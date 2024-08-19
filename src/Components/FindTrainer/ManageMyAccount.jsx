import React from 'react';
import Banner from '../AllCart/Banner';

const ManageMyAccount = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-4'>
                    <div className='flex flex-col space-y-10 mb-10'>
                        <h1 className='text-3xl font-bold  my-8'>Dashbord</h1>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/profile.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold text-red-400 '>Profile</h1>
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
                                <h1 className='text-xl font-bold  '>Services</h1>
                            </div>
                        </a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/shopping-cart.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold  '>Products</h1>
                            </div>
                        </a>
                        <a href="">
                            <div className='flex space-x-2 '>
                                <img src="/src/assets/image/FindTrainer/star.png" alt="" className='w-7 h-7' />
                                <h1 className='text-xl font-bold '>Reviews</h1>
                            </div>
                        </a>

                    </div>
                    <div className='col-span-3'>
                        <div className='flex justify-between'>
                            <button className="btn btn-outline  border-red-400 text-red-400 rounded-3xl text-xl">Online</button>
                            <button className="btn btn-outline border-red-400 text-red-400 rounded-3xl text-xl">Edit Profile</button>
                        </div>
                        <div className='my-10 flex mx-auto justify-center items-center space-x-16 '>

                            <div>
                                <img src="/src/assets/image/FindTrainer/Ellipse 2905.png" alt="" />
                            </div>
                            <div className='flex flex-col space-y-4 '>
                                <h1 className='text-3xl font-bold'>Jams Anderson</h1>
                                <p className='text-[#938683] text-2xl font-bold'>Groomer</p>
                                <div className='flex space-x-3 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    </div>
                                    <p className='text-lg'>5 (125 Reviews)</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-red-400 my-10'></div>
                        <div className='flex justify-between'>
                            <div className='flex space-x-4'>
                                <button className="btn btn-outline  border-red-400 bg-[#FF5C2C] text-red-400 rounded-3xl text-xl">Contact Me</button>
                                <button className="btn btn-outline border-red-400 text-red-400 rounded-3xl text-xl">Get a Quote </button>
                            </div>
                            <div>
                                <button className="btn btn-wide btn-outline border-red-400 text-red-400 rounded-3xl text-xl">Book a Consultation </button>
                            </div>
                        </div>
                        <div className='bg-[#FF5C2C1c] my-10 rounded-3xl '>
                           <div className=' p-16 text-center flex flex-col space-y-5'> 
                            <h1 className='text-3xl font-bold text-[#FF5C2C]'>About Me</h1>
                            <h2 className='text-2xl'>IN BUSINESS SINCE 2014</h2>
                            <p className='text-lg'>We are a reward-based training company that offers private in-home training, as well as, group classes at The Pooch Palace in the beautiful, Alabama town of Cullman. For more information about us, visit our website, NamasteDogTraining.com, or find us on Facebook, Instagram, Tik Tok, and Youtube!</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageMyAccount;