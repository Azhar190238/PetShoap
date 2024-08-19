import React from 'react';
import Banner from '../AllCart/Banner';

const ManageMyAccount = () => {
    return (
        <div>
           <Banner></Banner> 
           <div className='max-w-[1320px] mx-auto'>
           <div className= ' grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
                <h1  className='text-2xl font-bold  my-8'>Dashbord</h1>
                <div>
                    <img src="" alt="" />
                    <h1 className='text-xl font-bold text-red-400 my-8'>Profile</h1>
                </div>

            </div>
            <div className='col-span-3'>

            </div>
            </div>
           </div>
        </div>
    );
};

export default ManageMyAccount;