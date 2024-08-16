import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookAppoinment = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='max-w-[1320px]  mx-auto my-10 text-center'>
            <div className='my-8'>
                <h1 className='text-[#181818] font-bold text-3xl '>Book an <br /> Appointment</h1>
            </div>

            <div className="grid grid-cols-2 w-[300px] mb-6 mx-auto relative join">
                <button
                    className={`btn join-item btn-outline rounded-3xl ${activeButton === 'aboutCare' ? 'bg-[#FF5C2C] text-white ' : 'bg-[#b78a7c] text-red-600 '
                        }`}
                    onClick={() => handleButtonClick('aboutCare')}
                >
                    About Care
                </button>
                <Link to='/appointmentMe'
                    className={`btn join-item btn-outline rounded-3xl ${activeButton === 'aboutMe' ? 'bg-[#FF5C2C] text-white ' : 'bg-[#b78a7c] text-red-600'
                        }`}
                    onClick={() => handleButtonClick('aboutMe')}
                >
                    About Me
                </Link>
            </div>
            <div className='bg-[#FF5C2C1A] flex-col space-y-4 w-[400px] md:w-[900px]  mx-auto py-6 rounded-2xl'>
                <h1 className=' font-bold text-3xl'>
                    1 Day FREE daycare trail for new clients!
                </h1>
                <p className='text-[#938683]'>
                    Reservation requared. Discount cannot be applied during peak periods.
                </p>
            </div>
            <div className='flex w-[400px] md:w-[950px] my-6 md:mx-44 px-10 justify-center text-center items-center space-x-2  '>
                <p className=' font-bold text-xl'>Interested  In : </p>
                <div className='flex space-x-10'>
                    <div className='flex space-x-2'>
                        <input type="radio" name="radio-8" className="radio radio-error" defaultChecked />
                        <p>Veterinary</p> </div>
                    <div className='flex space-x-2'>
                        <input type="radio" name="radio-8" className="radio radio-error" />
                        <p>Veterinary</p> </div>
                    <div className='flex space-x-2'>
                        <input type="radio" name="radio-8" className="radio radio-error" />
                        <p>Veterinary</p> </div>
                    <div className='flex space-x-2'>
                        <input type="radio" name="radio-8" className="radio radio-error" />
                        <p>Veterinary</p> </div>
                </div>
            </div>
            <div className='flex mx-auto w-[400px] md:w-[900px] space-x-4 my-6 '>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <button className="btn btn-wide bg-[#FF5C2C] text-white rounded-3xl">Start Reservation</button>
            </div>
        </div>
    );
};

export default BookAppoinment;