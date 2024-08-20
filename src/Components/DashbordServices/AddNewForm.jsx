import React from 'react';
import  { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Banner from '../AllCart/Banner';
import { useNavigate } from 'react-router-dom';

const AddNewForm = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*'
    });
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto'>
                <button onClick={() => navigate('/findTrainer')} className="btn join-item border-[#FF5C2C] text-[#FF5C2C] rounded-3xl px-6 my-10 ">Back To Profile</button>
                <div className=' border border-[#FF5C2C] mb-10 rounded-2xl'>
                    <div className='p-8'>
                        <div className='my-5 rounded-2xl'>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="input input-bordered border-[#FF5C2C] w-full max-w-[800px]" />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-xl font-semibold'>Description</h1>
                            <textarea
                                placeholder="Description"
                                className="textarea border-[#FF5C2C] textarea-lg w-full  "></textarea>
                        </div>
                        <div className='max-w-[750px] my-5'>
                            <h1 className='text-xl font-semibold'>Description</h1>
                            <div className='flex space-x-7 items-center my-5'>
                                <h1>Brand:</h1>
                                <input
                                    type="text"
                                    placeholder="Product Title"
                                    className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add brand</p>

                            </div>
                            <div className='flex space-x-7 items-center my-5'>
                                <h1>Price:</h1>
                                <input
                                    type="text"
                                    placeholder="Product Title"
                                    className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add Price</p>

                            </div>
                            <div className='flex space-x-7 items-center my-5'>
                                <h1>Weight:</h1>
                                <input
                                    type="text"
                                    placeholder="Product Title"
                                    className="input input-bordered border-[#FF5C2C] w-full " />

                                <p className='whitespace-pre'>Add Weight</p>

                            </div>
                        </div>
                        <div className='max-w-[500px] h-[400px] my-5'>
                            <h1 className='text-xl font-semibold'>Upload Photo</h1>
                            <div className='max-w-[500px] h-[300px] my-5'>
                                <div
                                    {...getRootProps()}
                                    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-4 ${isDragActive ? 'border-blue-500' : 'border-[#FF5C2C]'}`}
                                    style={{ height: '100%' }}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        selectedImage ?
                                            <img src={selectedImage} alt="Uploaded" className="max-h-full max-w-full object-contain rounded-xl" /> :
                                            (
                                                isDragActive ?
                                                    <p className='text-center text-gray-600'>Drop the image here...</p> :
                                                    <p className='text-center text-gray-600'>Drag & drop an image here, or click to <br /> Browser</p>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                        <button className="btn join-item bg-[#FF5C2C] btn-wide text-white rounded-3xl px-6 my-10 ">Submit</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewForm;



// import Banner from '../AllCart/Banner';

// const AddNewForm = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const onDrop = useCallback((acceptedFiles) => {
//         const file = acceptedFiles[0];
//         setSelectedImage(URL.createObjectURL(file));
//     }, []);

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         accept: 'image/*'
//     });

//     return (
//         <div>
//             <Banner />
//             <div className='max-w-[1320px] mx-auto'>
//                 <button onClick={() => navigate('/findTrainer')} className="btn join-item border-[#FF5C2C] text-[#FF5C2C] rounded-3xl px-6 my-10">Back To Profile</button>
//                 <div className='border border-[#FF5C2C] mb-10 rounded-2xl'>
//                     <div className='p-8'>
//                         {/* Other form elements... */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddNewForm;
