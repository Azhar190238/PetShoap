import React from 'react';

const AboutPuppy = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-10'>
            <div className='mb-10 '>
                <h1 className='text-[#260E07] text-3xl text-center font-bold '>American Water Spaniel <br /> Puppies For Sale</h1>

                <div role="tablist" className="tabs tabs-bordered flex-col justify-center items-center my-5 space-x-3">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C]  font-medium text-center md:ml-[350px] lg:ml-[520px]" aria-label="About_Puppy " />
                    <div role="tabpanel" className="tab-content py-10 ">
                        <div className='flex flex-col lg:flex-row space-y-10 justify-between space-x-36'>
                            <div>

                                <div className="shadow-2xl mb-4">
                                    <figure className='relative'>
                                        <img src="/src/assets/image/Card/1.png" className='md:w-[750px] h-[450px]' />
                                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                                    </figure>

                                </div>
                                <div className='flex justify-between'>
                                    <div className="grid grid-cols-2 bg-[#FF5C2C1C] rounded-full">
                                        <button className=" btn btn-outline rounded-3xl bg-[#FF5C2C1C] text-[#FF5C2C]">Videos</button>
                                        <button className=" btn btn-outline bg-[#FF5C2C] rounded-3xl text-white px-4">Photos</button>
                                    </div>
                                    <div>
                                    <button className="btn bg-[#FF5C2C] rounded-3xl text-white">Buy Now</button>
                                    </div>
                                </div>

                            </div>   
                            <div className='flex-col justify-center space-y-4'>
                                <p><span className='text-xl font-bold'>Name :</span> Moly</p>
                                <p><span className='text-xl font-bold'>Age :</span> 7</p>
                                <p><span className='text-xl font-bold'>Health Condition :</span> Vaccinations up to date.</p>
                                <p><span className='text-xl font-bold'>Gender :</span> Male</p>
                                <p><span className='text-xl font-bold'>Price :</span> $346 </p>
                            </div>
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Description "
                        defaultChecked />
                    <div role="tabpanel" className="tab-content py-10 ">
                        <div className='flex flex-col lg:flex-row space-y-10 justify-between space-x-36'>
                            <div>

                                <div className="shadow-2xl mb-4">
                                    <figure className='relative'>
                                        <img src="/src/assets/image/Card/1.png" className='md:w-[750px] h-[450px]' />
                                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                                    </figure>

                                </div>
                                <div className='flex justify-between'>
                                    <div className="grid grid-cols-2 bg-red-300 rounded-full">
                                        <button className=" btn btn-outline rounded-3xl bg-[#FF5C2C1C] text-[#FF5C2C]">Videos</button>
                                        <button className=" btn btn-outline bg-[#FF5C2C] rounded-3xl text-white px-4">Photos</button>
                                    </div>
                                    <div>
                                    <button className="btn bg-[#FF5C2C] rounded-3xl text-white">Buy Now</button>
                                    </div>
                                </div>

                            </div>   
                            <div className='flex-col justify-center space-y-4'>
                                <p><span className='text-xl font-bold'>Name :</span> Moly</p>
                                <p><span className='text-xl font-bold'>Age :</span> 7</p>
                                <p><span className='text-xl font-bold'>Health Condition :</span> Vaccinations up to date.</p>
                                <p><span className='text-xl font-bold'>Gender :</span> Male</p>
                                <p><span className='text-xl font-bold'>Price :</span> $346 </p>
                            </div>
                        </div>
                        <div className='my-10'>
                            <div className='flex-col space-y-2'>
                                <h1 className='text-[#260E07] text-3xl text-center font-bold'>Description:</h1>
                                <p><span className='text-xl font-bold'>Origin:</span>  United States </p>
                                <p><span className='text-lg font-bold'>Year Recognized: </span> 1940 </p>
                                <p><span className='text-lg font-bold'>Breed History & Description: </span> The development of the American breeds is a classic case of ¿Yankee ingenuity¿¿a particular genius for adapting Old World materials to solve New World problems. Breeding hounds that specialize in trailing raccoon is a good example. So is the AWS. The European immigrants who settled Wisconsin and Minnesota depended for sustenance on the region¿s plentiful waterfowl. Over generations they utilized various Euro breeds in creating a wholly new dog, the AWS, to meet the unique challenges of hunting in and around the Great Lakes. </p>
                                 
                            </div>

                            <div className='my-10 flex-col space-y-6 '>
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C] " value="100" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="100" max="100"></progress>
                                </div>
                                </div> 
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="10" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="10" max="100"></progress>
                                </div>
                                </div> 
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C] " value="80" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="50" max="100"></progress>
                                </div>
                                </div> 
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C] " value="50" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="60" max="100"></progress>
                                </div>
                                </div> 
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C] " value="30" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="40" max="100"></progress>
                                </div>
                                </div> 
                                <div className='flex  justify-between space-x-16'>
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C] " value="100" max="100"></progress>
                                </div> 
                                <div className='w-full'>
                                <p className=' font-bold'>Energy Level</p>
                                <progress className="progress progress-error bg-[#FF5C2C1C]" value="100" max="100"></progress>
                                </div>
                                </div> 
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPuppy;