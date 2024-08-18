import { useNavigate } from "react-router-dom";

// import { Link, NavLink } from 'react-router-dom';
const ServiceCard = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1320px] mx-auto mt-10'>
            <div className='flex items-center justify-center space-x-4'>
            <button onClick={() => navigate('/findPuppy')} className="btn  md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C] ">Puppies</button>

                <button className="btn md:btn-wide  bg-[#FF5C2C] text-white ">Services</button>

                <button onClick={ ()=> navigate('/puppyProducts')} className="btn md:btn-wide bg-[#FF5C2C33] text-[#FF5C2C]">Products</button>  
                </div>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-[#260E07] text-2xl my-10 '>Showing 1-9 of 846 results</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                        {/* <div> */}
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                            <figure className='relative'>
                                <img src="/src/assets/image/Card/1.png" className='w-[400px] h-[260px]' />
                                <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                            </figure>
                            <div className="card-body mb-0 pb-0">
                                <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                                <p className=''>Meal/Female available 15 weeks old</p>
                            </div>
                            <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                                <br />
                            </div>
                            <div className='card-body'>
                                <p>664522 Spring Creek Montrose, <br />
                                    CO 8542</p>
                            </div>
                            {/*           </div> */}
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;