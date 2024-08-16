import React from 'react';

const Benefit = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1320px] justify-between mx-auto'>
            <div className='relative'>
             <img src="/src/assets/image/appoinment/2.png" alt="" className='w-96 h-[600px]'  />
             <div><img src="/src/assets/image/appoinment/1.png" alt="" className=' w-80 h-[440px] absolute bottom-20 right-20' /></div>
            </div>
            <div className='flex-col space-y-6 pt-20'>
                <h1 className='text-[#181818] font-bold text-2xl mb-4'>Benefits:</h1>
                <div>
                    <h1 className='text-[#181818] font-bold text-xl'>Total Wellness:</h1>
                    <p className='text-[#938683]'>we focus on your dog’s total wellness and don’t merely limit ourselves to veterinary care. We coordinate with groomers, trainers, dog walkers, etc. to ensure that in addition to being healthy 
                        your dog is getting enough exercise, mental stimulation, and is well mannered among other things</p>
                </div>
                <div>
                    <h1 className='text-[#181818] font-bold text-xl'>Prevention:</h1>
                    <p className='text-[#938683]'>we focus on your dog’s total wellness and don’t merely limit ourselves to veterinary care. We coordinate with groomers, trainers, dog walkers, etc. to ensure that in addition to being healthy 
                        your dog is getting enough exercise, mental stimulation, and is well mannered among other things</p>
                </div>
                <div>
                    <h1 className='text-[#181818] font-bold text-xl'>Convenience:</h1>
                    <p className='text-[#938683]'>we focus on your dog’s total wellness and don’t merely limit ourselves to veterinary care. We coordinate with groomers, trainers, dog walkers, etc. to ensure that in addition to being healthy 
                        your dog is getting enough exercise, mental stimulation, and is well mannered among other things</p>
                </div>

            </div>
        </div>
    );
};

export default Benefit;