import React from 'react';
import Banner from '../AllCart/Banner';

const AddNewForm = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <button onClick={() => navigate('/findTrainer')} className="btn join-item border-[#FF5C2C] text-[#FF5C2C] rounded-3xl px-6 my-10 ">Back To Profile</button>
                <div className=' border border-[#FF5C2C] mb-10 rounded-2xl'>
                    <div className='p-8'>
                        <div className='my-5 rounded-2xl'>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="input input-bordered border-[#FF5C2C] w-full max-w-[800px]" />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-xl font-semibold'>Description</h1>
                            <textarea
                                placeholder="Description"
                                className="textarea border-[#FF5C2C] textarea-lg w-full  "></textarea>
                        </div>
                        <div className='max-w-[750px] my-5'>
                        <h1 className='text-xl font-semibold'>Description</h1>
                        <div className='flex space-x-7 items-center my-5'>
                            <h1>Brand:</h1>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add brand</p>

                        </div>
                        <div className='flex space-x-7 items-center my-5'>
                            <h1>Price:</h1>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add Price</p>

                        </div>
                        <div className='flex space-x-7 items-center my-5'>
                            <h1>Weight:</h1>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add Weight</p>

                        </div>
                        </div>
                        <div className='max-w-[500px] h-[400px] my-5'>
                        <h1 className='text-xl font-semibold'>Upload Photo</h1>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewForm;