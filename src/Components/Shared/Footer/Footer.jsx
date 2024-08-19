import React from 'react';


const Footer = () => {
    return (
        <div className='bg-[#260E07] '>
            <div className='pt-10 max-w-[1320px] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex mb-10 lg:mb-1 md:mb-5'>
                        <a href=""><img className='mr-7' src="/src/assets/image/FooterIcon/face.png" alt="" /></a>
                        <a href=""><img className='mr-7' src="/src/assets/image/FooterIcon/twi.png" alt="" /></a>
                        <a href=""><img className='mr-7' src="/src/assets/image/FooterIcon/ins.png" alt="" /></a>
                        <a href=""><img className='mr-7' src="/src/assets/image/FooterIcon/whats.png" alt="" /></a>
                    </div>
                    <div>
                        <img className='w-3/4' src="/src/assets/image/FooterIcon/fotLogo.png" alt="" />
                    </div>
                    <div>
                        <div className='text-white text-sm md:text-xl my-3 ml-2'>
                            Lets update yourself
                        </div>
                        <div className='flex'>
                            <input
                                type="text"
                                placeholder="Email"
                                class="input input-bordered bg-white rounded-3xl input-md w-full max-w-xs mr-2 md:mr-4" />

                            <a className='btn rounded-3xl bg-[#FF5C2C] text-white font-bold px-10'>
                                Subscribe
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-10 max-w-[1320px] text-white mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-sm font-bold' href="">Bully Market Place</a>
                        <div className='flex flex-col mt-3'>

                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Find Puppy</a>
                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Find Groomer</a>
                            <a href='/findTrainer' className="link link-hover text-[#EBECED] font-thin text-xs">Find Trainer</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-sm font-bold' href="">List with Us</a>
                        <div className='flex flex-col mt-3'>

                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Breeders | Creating a Listing</a>
                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Groomer | Creating a Listing </a>
                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Trainer | Creating a Listing</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-sm font-bold' href=""> Newsletters & Affiliates</a>
                        <div className='flex flex-col mt-3'>
                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Bully Good Works</a>
                            <a className="link link-hover text-[#EBECED] font-thin text-xs">Newsletter Subscriptions</a>                     <a className="link link-hover text-[#EBECED] font-thin text-xs">Center</a>
                            <a href='/payment' className="link link-hover text-[#EBECED] font-thin text-xs">Payment</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='font-bold text-sm' href=""> Polices & Support</a>
                        <div className='flex flex-col mt-3'>
                            <a href='/review' className="link link-hover text-[#EBECED] font-thin text-xs">Review</a>
                            <a href='/singleShop' className="link link-hover text-[#EBECED] font-thin text-xs">Single Shop</a>
                            <a href='/contact' className="link link-hover text-[#EBECED] font-thin text-xs">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="divider divider-neutral"></div>


            </div>
            <div className="text-white text-center pb-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>

        </div>
    );
};


export default Footer;