import React from 'react';
import Banner from '../AllCart/Banner';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd'
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: <p className='text-red-500 border-2 text-xl'>Personal Information</p>,
        children:
            <div className='my-10'>
                <p className='py-4'>
                    Tell us a bit about yourself. This information will appear on your public profile, <br /> so that potential customer can get to know your better.
                </p>
                <div>
                    <div className='flex gap-28 my-10'>
                        <div>
                            <h1 className='text-xl font-semibold'>Full Name*</h1>
                        </div>
                        <div className='flex space-x-8'>

                            <input type="text" placeholder="First Name" className="input input-bordered input-error w-full max-w-xs" />
                            <input type="text" placeholder="Last Name" className="input input-bordered input-error w-full max-w-xs" />
                        </div>

                    </div>
                </div>

                <div className='flex gap-20 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>Display Name*</h1>
                    </div>
                    <div className='flex space-x-8'>

                        <input type="text" placeholder="Display Name *" className="input input-bordered input-error w-full max-w-xs" />
                    </div>
                </div>
                
                <div className='flex gap-20 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>Profile Picture*</h1>
                    </div>
                    <div className='flex space-x-8'>

                        <div className='relative ml-10'>
                            <img src="/src/assets/image/EditProfile/Ellipse 2911.png" alt="" />
                            <img src="/src/assets/image/EditProfile/Icon (2).png" alt="" className='absolute top-12 left-24' />
                        </div>
                    </div>
                </div>
                <div className='flex  gap-36 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>About*</h1>
                    </div>


                    <textarea
                        placeholder="Share a bit about your experiences."
                        className="textarea textarea-bordered textarea-lg w-full border-red-400"></textarea>

                </div>

                <div className='flex gap-28 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>Language*</h1>
                    </div>
                    <div className='flex space-x-8'>

                        <select className="select select-error w-full md:w-[300px]  border-[#FFA58A]">
                            <option disabled selected>Language</option>
                            <option>Strapi</option>
                            <option>Ghost</option>
                            <option>Netlify CMS</option>
                            <option>Sanity</option>
                        </select>
                        <select className="select select-error  w-full md:w-[300px]  border-[#FFA58A]">
                            <option disabled selected>Level</option>
                            <option>Strapi</option>
                            <option>Ghost</option>
                            <option>Netlify CMS</option>
                            <option>Sanity</option>
                        </select>
                        <button className='btn bg-[#FFA58A] text-white rounded-2xl'>Add</button>
                    </div>

                </div>
                <div className='flex justify-end'>
                        <button className='btn btn-wide bg-[#FF5C2C] text-white rounded-3xl'>Continue</button>
                    </div>
            </div>,
    },
    {
        key: '2',
        label: <p className='text-red-500 border-2 text-xl'>Professional Information</p>,
        children: 
        <div className='my-10'>
        <p className='py-4'>
        This is your shine. Let potential buyers know what you do to best and <br /> how you gained your experience.  
        </p>
        <div>
        <div className='flex gap-20 my-10'>
            <div>
                <h1 className='text-xl font-semibold'>Occupation  *</h1>
            </div>
            <div className='flex space-x-8'>

                <select className="select select-error w-full md:w-[300px]  border-[#FFA58A]">
                    <option disabled selected>Select Occupation</option>
                    <option>Strapi</option>
                    <option>Ghost</option>
                    <option>Netlify CMS</option>
                    <option>Sanity</option>
                </select>
                <button className='btn px-6 bg-[#FFA58A] text-white rounded-2xl'>Add</button>
            </div>

        </div>
        <div className='flex gap-28 my-10'>
            <div>
                <h1 className='text-xl font-semibold'>Services *</h1>
            </div>
            <div className='flex space-x-8'>

                <select className="select select-error w-full md:w-[300px]  border-[#FFA58A]">
                    <option disabled selected>Select Service</option>
                    <option>Strapi</option>
                    <option>Ghost</option>
                    <option>Netlify CMS</option>
                    <option>Sanity</option>
                </select>
                <select className="select select-error  w-full md:w-[300px]  border-[#FFA58A]">
                    <option disabled selected>Experience Level</option>
                    <option>Strapi</option>
                    <option>Ghost</option>
                    <option>Netlify CMS</option>
                    <option>Sanity</option>
                </select>
                <button className='btn px-6 bg-[#FFA58A] text-white rounded-2xl'>Add</button>
            </div>

        </div>
            <div className='flex gap-28 my-10'>
                <div>
                    <h1 className='text-xl font-semibold'>Location *</h1>
                </div>
                <div className='flex space-x-8'>

                    <input type="text" placeholder="Add your location" className="input input-bordered input-error w-full" />
                    <button className='btn px-6 bg-[#FFA58A] text-white rounded-2xl'>Add</button>
                </div>
                

            </div>
            <div className='flex gap-32 my-10'>
                <div>
                    <h1 className='text-xl font-semibold'>Phone *</h1>
                </div>
                <div className='flex space-x-8'>

                    <input type="text" placeholder="+1 235 6456 326" className="input input-bordered input-error w-full" />
                    <button className='btn px-6 bg-[#FFA58A] text-white rounded-2xl'>Add</button>
                </div>
                

            </div>
       
        <div className='flex justify-end'>
                <button className='btn btn-wide bg-[#FF5C2C] text-white rounded-3xl'>Continue & Create your Service</button>
            </div>
            </div>
    </div>,
    },

];

const EditPersonal = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between'>
                <div>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
                <button onClick={() => navigate('/findTrainer')} className="btn join-item bg-[#FF5C2C] rounded-3xl px-6 ">Back to Profile</button>
            </div>
        </div>
    );
};

export default EditPersonal;