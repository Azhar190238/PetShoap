import React from 'react';
import question from '../../assets/image/myAccount/question.png'

const AvailableBalance = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center mt-20 mb-10 gap-8'>
            <div className='w-full md:w-1/3'>
                <h4 className='font-bold'>Bully Mall Balance</h4>
                <div className='border border-[#FF5C2C] flex flex-col justify-center p-6 rounded-lg '>
                    <div className='flex gap-4 items-center'>
                        <p className='text-[#938683] '>From canceled orders</p>
                        <img src={question} alt="" />
                    </div>
                    <h2 className='font-extrabold text-2xl mt-5'>$34.75</h2>
                    <p className='text-[#938683] mt-5'>purchases</p>
                </div>
            </div>

            <div className='w-full md:w-1/3 '>
                <h4 className='font-bold'>Bully Mall Credits</h4>
                <div className='border border-[#FF5C2C] flex flex-col justify-center p-6 rounded-lg'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-[#938683] '>Credits</p>
                        <img src={question} alt="" />
                    </div>
                    <h2 className='font-extrabold text-2xl mt-5'>$34.75</h2>
                    <p className='text-[#938683] mt-5'>purchases</p>
                </div>

            </div>
        </div>
    );
};

export default AvailableBalance;