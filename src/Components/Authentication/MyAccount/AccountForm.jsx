import React from 'react';

const AccountForm = () => {
    return (
        <div className='max-w-[1050px] mx-auto flex-col justify-center  my-4 col-span-2 shadow-2xl  p-4 mb-8 rounded-2xl '>
        <div className='flex justify-between'>  
          <h1 className='text-2xl font-bold pt-4 text-center '>Save Card:</h1> 
          <button className=" btn btn-wide bg-[#FF5C2C] text-white rounded-3xl mb-5">Add New Card</button>
        </div>
        <div className=''>
         <div className='flex-col justify-center items-center my-4  '>
             <h1 className='text-lg'>Card Name</h1>
             <input type="text" placeholder="Leton Nondi" className="input input-bordered border-[#FF5C2C] w-full" />
             </div>
             <div className='flex-col justify-center items-center my-4  '>
             <h1 className='text-lg'>Card Number</h1>
             <input type="text" placeholder="*********1245" className="input input-bordered border-[#FF5C2C] w-full" />
             </div>
         <div className='flex justify-between space-x-4'>
             <div className='w-full'>
             <h1 className='text-lg'>Expire Date:</h1>
             <input type="text" placeholder="20/30" className="input input-bordered border-[#FF5C2C] w-full " />
             </div>
             <div className='w-full'>
             <h1 className='text-lg'>CVV</h1>
             <input type="text" placeholder="20/30" className="input input-bordered border-[#FF5C2C] w-full " />
             </div>
             
         </div>
  


     </div>
     </div>
    );
};

export default AccountForm;