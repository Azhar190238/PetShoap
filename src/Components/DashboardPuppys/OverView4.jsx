import React from 'react';
import Banner from '../Shared/Banner/Banner';
import { useRef } from 'react';


const OverView4 = () => {

    const editorRef = useRef(null);

    // Function to format the text based on command
    const formatText = (command) => {
        if (editorRef.current) {
            editorRef.current.focus();
            document.execCommand(command, false, null);
        }
    }
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto mt-40 mb-10'>
                <div className='flex gap-5 md:gap-10'>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full bg-[#FF5C2C] p-3'>
                            <p className='text-white h-3 w-4 pb-4 pl-1'>1</p>
                        </div>
                        <p className='text-[#FF5C2C] font-bold'>Overview</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>2</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Description & FAQ</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>3</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Publish</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border border-[#938683] p-3'>
                            <p className='text-[#938683] h-3 w-4 pb-4 pl-1'>4</p>
                        </div>
                        <p className='text-[#938683] font-bold'>Glary</p>
                    </div>

                </div>
                <div className='w-full h-px bg-[#FF5C2C] mt-3 mb-3'> <br /> </div>
                <div className='mt-10'>
                    <h4 className='text-black font-bold text-xl'>Briefly Describe Your  Service</h4>
                    <div className="flex items-center justify-center  p-2">
                        <div className="w-full rounded-lg shadow-lg">
                            <div className="flex space-x-4 mb-4 bg-[#F7F7F7] p-2">
                                <button
                                    onClick={() => formatText('italic')}
                                    className="px-4 py-2 bg-[#FF5C2C] text-white rounded "
                                >
                                    Italic
                                </button>
                                <button
                                    onClick={() => formatText('bold')}
                                    className="px-4 py-2 bg-[#FF5C2C] text-white rounded"
                                >
                                    Bold
                                </button>

                                <button
                                    onClick={() => formatText('justifyLeft')}
                                    className="px-4 py-2 bg-[#FF5C2C] text-white rounded"
                                >
                                    Left Align
                                </button>
                                <button
                                    onClick={() => formatText('justifyRight')}
                                    className="px-4 py-2 bg-[#FF5C2C] text-white rounded hover:bg-red-600"
                                >
                                    Right Align
                                </button>
                            </div>
                            <div
                                ref={editorRef}
                                className="text-editor min-h-[150px] border border-gray-300 p-2 overflow-auto"
                                contentEditable
                            >
                                <p>Type your text here...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h4 className='text-black font-bold text-xl'>Add Questions & Answers for Your Buyers.</h4>
                    <input className='mt-5 border border-[#FF5C2C] rounded-md w-full p-3' type="text" placeholder='Do you know about t-short design?' />
                    <input className='mt-5 border border-[#FF5C2C] rounded-md w-full h-32 p-3' type="text" placeholder='write here' />
                </div>
                <div className='mt-8'>
                    <div className='flex justify-between'>
                        <div></div>
                        <div className='flex justify-end gap-4'>
                        <a href=""><button className='btn border border-[#FF5C2C] text-black rounded-3xl px-8'>Cancel</button>                    </a>
                        <a href="/overView5"><button className='btn bg-[#FF5C2C] text-white rounded-3xl px-10'>Add</button>                    </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OverView4;