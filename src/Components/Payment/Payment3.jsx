import React from 'react';
import homeIcon from '../../assets/image/payment/homeIcon.png'
import pussyBanner from '../../assets/image/payment/pussyCuteBanner.png'
import chatIcon from '../../assets/image/payment/chatIcon.png'
import person from '../../assets/image/payment/chatPerson.png'
import callIcon from '../../assets/image/payment/Call btn.png'
import file from '../../assets/image/payment/file.png'
import camera from '../../assets/image/payment/camera.png'
import aero from '../../assets/image/payment/Arrow - Right 2.png'
import Banner from '../AllCart/Banner';

const Payment3 = () => {
    return (
        <section>
        <Banner></Banner>

            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 bg-[#FFFFFF] shadow shadow-[#0000004D] rounded-xl p-4 mt-32 gap-16 mb-10'>
                    <div className=''>
                        <div className='flex gap-4 items-center mt-4'>
                            <img src={chatIcon} alt="" />
                            <h4 className='font-bold text-xl'>All Conversion</h4>
                        </div>
                        <div className='flex justify-between mt-16 items-center'>
                            <div className='flex items-center gap-6 py-3'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <p>3/10</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-8 items-center bg-[#FF5C2C1A] p-3 rounded-lg'>
                            <div className='flex items-center gap-6'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <p>3/10</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between items-center mb-10'>
                            <div className='flex items-center gap-6'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <img src={callIcon} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={person} alt="" />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">12:45</time>
                                </div>
                                <div className="chat-bubble">You were the Chosen One!</div>
                                <div className="chat-footer opacity-50">Delivered</div>
                            </div>
                            <div className="chat chat-end pr-8">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={person} alt="" />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Anakin
                                    <time className="text-xs opacity-50">12:46</time>
                                </div>
                                <div className="chat-bubble bg-[#FF5C2C]">I hate you!</div>
                                <div className="chat-footer opacity-50">Seen at 12:46</div>
                            </div>
                        </div>
                        <div className='w-full px-8'>
                            {/* <input className='w-full input input-bordered border-[#FF5C2C]' type="text" placeholder='Write Your message'/> */}
                            <label className="input input-bordered border-[#FF5C2C] flex items-center justify-between ">
                                <input type="text" className="grow" placeholder="Write Your message" />
                                <div className='flex items-center gap-4'>
                                    <img className='w-6 h-6' src={file} alt="" />
                                    <img className='w-6 h-6' src={camera} alt="" />
                                    <img className='w-8 h-8 bg-[#FF5C2C] rounded-lg p-2 text-3xl' src={aero} alt="" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Payment3;