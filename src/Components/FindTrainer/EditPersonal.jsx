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
                <div className='flex  gap-36 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>About*</h1>
                    </div>


                    <textarea
                        placeholder="Share a bit about your experiences."
                        className="textarea textarea-bordered textarea-lg w-full border-red-400"></textarea>

                </div>

                <div className='flex gap-20 my-10'>
                    <div>
                        <h1 className='text-xl font-semibold'>Language*</h1>
                    </div>
                    <div className='flex space-x-8'>

                        <Select
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="Search to Select"
                            optionFilterProp="label"
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },
                                {
                                    value: '3',
                                    label: 'Communicated',
                                },
                                {
                                    value: '4',
                                    label: 'Identified',
                                },
                                {
                                    value: '5',
                                    label: 'Resolved',
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>,
    },
    {
        key: '2',
        label: <p className='text-red-500 border-2 text-xl'>Professional Information</p>,
        children: 'Content of Tab Pane 2',
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