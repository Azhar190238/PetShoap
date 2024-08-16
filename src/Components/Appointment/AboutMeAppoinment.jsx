import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutMeAppoinment = () => {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div>
            <div className='my-8 text-center'>
                <h1 className='text-[#181818] font-bold text-3xl '>Book an <br /> Appointment</h1>
            </div>

            <div className="grid grid-cols-2 w-[300px] mb-6 mx-auto relative join">
                <Link to='/appointment'
                    className={`btn join-item btn-outline rounded-3xl ${activeButton === 'aboutCare' ? 'bg-[#FF5C2C] text-white ' : 'bg-[#b78a7c] text-red-600 '
                        }`}
                    onClick={() => handleButtonClick('aboutCare')}
                >
                    About Care
                </Link>
                <Link to='/appointmentMe'
                    className={`btn join-item btn-outline rounded-3xl ${activeButton === 'aboutMe' ? 'bg-[#FF5C2C] text-white ' : 'bg-[#b78a7c] text-red-600'
                        }`}
                    onClick={() => handleButtonClick('aboutMe')}
                >
                    About Me
                </Link>
            </div>
            <div className='w-[400px] md:w-[850px] flex-col justify-center mx-auto my-4  '>
                <div className='flex-col justify-center items-center my-4 '><input type="text" placeholder="Full Name" className="input input-bordered w-full" /></div>
                <div className='flex justify-between space-x-4'>
                    <input type="text" placeholder="Email" className="input input-bordered w-full " />
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                </div>
                <div className='flex-col justify-center items-center my-4 '><input type="text" placeholder="Location" className="input input-bordered w-full" /></div>
                <div className='flex-col justify-center items-center my-4 '> <input
                    type="text"
                    placeholder="Message"
                    className="input input-bordered input-lg w-full " />
                </div>
                <div className='flex items-center justify-center space-x-5'>
                <button className="btn bg-[#b78a7c] text-red-600 rounded-3xl">Previous</button>
                <button className="btn bg-[#FF5C2C] text-white  rounded-3xl">Send</button>
            </div>
            </div>



        </div>
    );
};

export default AboutMeAppoinment;