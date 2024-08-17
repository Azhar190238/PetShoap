import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TableCart = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-24 '>
                <div className="overflow-x-auto col-span-2 ">
                    <div className='flex justify-between'>
                        <h1 className='text-lg md:text-2xl font-bold'>1 Items In Card</h1>
                        <h1 className='text-lg md:text-2xl font-bold'>Constitute Buying </h1>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squire h-8 md:h-12 w-8 md:w-12">
                                                <img
                                                    src="/src/assets/image/ShopCart/1.png"
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Pedigree Fresh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Food

                                </td>
                                <td> $16.00</td>
                                <td>
                                    <div className="flex items-center border-4 w-28 space-x-4">
                                        <button
                                            onClick={handleDecrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-semibold">{quantity}</span>
                                        <button
                                            onClick={handleIncrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>

                                </td>
                                <td>&68.00 </td>
                                <th>
                                    <img src="/src/assets/image/ShopCart/Icon.png" alt="" />
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squire h-8 md:h-12 w-8 md:w-12">
                                                <img
                                                    src="/src/assets/image/ShopCart/2.png"
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Pedigree Fresh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Food

                                </td>
                                <td> $16.00</td>
                                <td>
                                    <div className="flex items-center border-4 w-28 space-x-4">
                                        <button
                                            onClick={handleDecrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-semibold">{quantity}</span>
                                        <button
                                            onClick={handleIncrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>

                                </td>
                                <td>&68.00 </td>
                                <th>
                                    <img src="/src/assets/image/ShopCart/Icon.png" alt="" />
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-1 md:gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squire h-8 md:h-12 w-8 md:w-12">
                                                <img
                                                    src="/src/assets/image/ShopCart/3.png"
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Pedigree Fresh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Food

                                </td>
                                <td> $16.00</td>
                                <td>
                                    <div className="flex items-center border-4 w-28 space-x-4">
                                        <button
                                            onClick={handleDecrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl font-semibold">{quantity}</span>
                                        <button
                                            onClick={handleIncrease}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>

                                </td>
                                <td>&68.00 </td>
                                <th>
                                    <img src="/src/assets/image/ShopCart/Icon.png" alt="" />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <div className='my-10 flex-col space-y-4 w-96'>
                        <h1 className='text-xl font-bold '> Apply Coupon</h1>
                        <label className="input input-bordered border-[#FF5C2C] flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Coupon Code" />
                            <img src="/src/assets/image/ShopCart/icon-2.png" alt="" />
                        </label>

                    </div>
                </div>
                <div className='shadow-2xl  p-7 mb-8 rounded-2xl'>
                    <h1 className='text-lg md:text-2xl font-bold'>Order Summary</h1>
                    <div className='border-t-2 border-1 border-gray-300 mt-3 mb-6'></div>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-bold'>Subtotal</h1>
                        <h1>$98.00 </h1>
                    </div>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-bold'>discount</h1>
                        <h1>$0.00 </h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>Shipping Charge</h1>
                        <h1>$98.00 </h1>
                    </div>
                    <div className='border-t-2 border-1 border-gray-300 mt-3 mb-1'></div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-2xl'>Total</h1>
                        <h1 className='font-bold text-xl'>$98.00 </h1>
                    </div>

                    <div className="form-control my-10 flex-col space-x-2">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox border-[#FF5C2C] mr-3" />
                            <p className="label-text">By placing your order, you agree with our company privacy policy and <span className='text-[#FF5C2C]'>condition</span> of use.</p>
                        </label>
                    </div>
                    <div className='my-10 flex justify-center'>
                    <button onClick={()=>navigate('/checkout')} className="btn btn-wide bg-[#FF5C2C] text-white rounded-3xl">Proceed to checkout</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TableCart;