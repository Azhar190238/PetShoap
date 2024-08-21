import React from 'react';
import Banner from '../Shared/Banner/Banner';

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
import { message } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const AddPuppy = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },

    ]);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );


    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-[1320px] mx-auto bg-[#FF5C2C1A] rounded-lg p-4 mt-40 mb-10'>
                <div className='mt-5'>
                    <input className='border w-2/3 border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                </div>
                <div className='flex gap-6 mt-10 flex-col md:flex-row'>
                    <div className='flex-1'>
                        <label>
                            <p>Description</p>
                            <input className='border w-full border-[#FF5C2C] p-3 h-32 rounded-lg bg-[#FF5C2C1A]' type="text" />
                        </label>
                    </div>
                    <div className='flex-1'>
                        <label>
                            <p>Health</p>
                            <input className='border w-full border-[#FF5C2C] p-3 h-32 rounded-lg bg-[#FF5C2C1A]' type="text" />
                        </label>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Name:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Date:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-10 mt-4'>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Health:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Trainer:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 mt-4'>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Height:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                                <p>Width:</p>
                                <input className='border w-full border-[#FF5C2C] p-3 rounded-lg bg-[#FF5C2C1A]' type="text" placeholder='Brand Name' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex-1'>
                        <label>
                            <p>Description</p>
                            <input className='border w-full md:w-1/2 border-[#FF5C2C] p-3 h-32 rounded-lg bg-[#FF5C2C1A]' type="text" />
                        </label>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='font-bold my-2'>Image Upload</p>
                    <div className='flex justify-center gap-8'>
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        {previewImage && (
                            <Image
                                width={500}
                                className='!h-[30px] !w-[30px]'
                                // wrapperStyle={{
                                //     display: 'none',
                                // }}
                                preview={{
                                    visible: previewOpen,
                                    onVisibleChange: (visible) => setPreviewOpen(visible),
                                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                }}
                                src={previewImage}
                            />
                        )}
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='font-bold my-2'>Video Upload </p>
                    <div className='w-full md:w-1/2'>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div></div>
                    <a href="/ServicePuppyDashboard"><button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Continue</button>                    </a>
                </div>
            </div>
        </section>
    );
};

export default AddPuppy;