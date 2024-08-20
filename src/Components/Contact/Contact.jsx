import React from 'react';
import homeIcon from '../../assets/image/contact/homeIcon.png'
import pussyBanner from '../../assets/image/contact/pussyCuteBanner.png'
import customerService from '../../assets/image/contact/customer-service 1.png'
import location from '../../assets/image/contact/location.png'
import fax from '../../assets/image/contact/fax.png'
import email from '../../assets/image/contact/email1.png'
import tel from '../../assets/image/contact/tel.png'
import map from '../../assets/image/contact/map.png'
import Banner from '../AllCart/Banner';

const Contact = () => {
    return (
        <section>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto mt-32'>
                <div className='flex flex-col md:flex-row justify-center gap-32'>
                    <div className='flex-1 bg-slate-100 p-8 rounded-lg'>
                        <h4 className='text-[#FE4651] font-bold'>Contact Us</h4>
                        <h2 className='text-black font-extrabold text-2xl'>Sent a Message</h2>
                        <p className='text-[#938683] mt-4'>Please do not hesitate to send us a message, We are looking forward to hearing from you! We reply within 24 hours.</p>

                        <input type="text" placeholder="First Name" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-3" />
                        <input type="text" placeholder="Last Name" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="email" placeholder="Email" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="number" placeholder="Phone" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="text" placeholder="Subject" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="text" placeholder="Write Your Message" className="input border-b-2 border-[#ACB5BD] w-full h-32 border-x-0 border-y-0 mt-6" />

                        <div className='text-center'>
                            <button className=" btn outline-none mt-6 mb-4 w-3/5  rounded-3xl bg-[#FF5C2C] text-white font-bold text-center"> Submit </button>
                        </div>
                    </div>
                    <div className='flex-1 p-8 md:p-0'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img src={customerService} alt="" />
                            </div>
                            <div>
                                <h3 className='font-extrabold text-black text-2xl'>Contact Us 24/7</h3>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-8'>
                            <div>
                                <img src={fax} alt="" />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Address </h4>
                                <p className='text-[#938683]'>85 KDA Outer bypass Road, Sonadanga, <br /> Khulna 9100,</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-8'>
                            <div>
                                <img src={email} alt="" />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Telephone </h4>
                                <p className='text-[#938683]'>01890445424</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-8'>
                            <div>
                                <img src={tel} alt="" />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Email </h4>
                                <p className='text-[#938683]'>jamal@gamil.com</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-8'>
                            <div>
                                <img src={location} alt="" />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Fax </h4>
                                <p className='text-[#938683]'>+8801404049797</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-8 mb-8 p-8 md:p-0'>
                    <img src={map} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;