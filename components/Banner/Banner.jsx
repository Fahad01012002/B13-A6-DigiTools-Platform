import { Play } from 'lucide-react';
import React from 'react';
import image from '../../assets/banner.png'
import circle from '../../assets/Group 5.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center mt-20 mb-20 gap-20'>
            <div className='space-y-4'>
                <span className='text-[#1e00ff] bg-[#4f39f627] py-2 px-4 rounded-[20px] flex items-center w-80 gap-2'>
                    <img className='w-6' src={circle} alt="" />
                    <h2 className='font-medium'>New: AI-Powered Tools Available</h2>
                </span>
                <h1 className='font-extrabold text-[72px] leading-20'>Supercharge Your Digital Workflow</h1>
                <p className='text-[#627382] text-[18px] leading-5'>Access premium AI tools, design assets, templates, and productivity <br /><br />
                    software—all in one place. Start creating faster today. <br /><br /> Explore Products
                </p>
                <div className='mt-8 space-x-2'>
                    <button className='btn bg-[#6352e9] text-white rounded-[20px]'>Explore Products</button>
                    <button className='btn text-[#6352e9] border-[#6352e9] bg-white rounded-[20px]'><Play />
                        Wtach Demo</button>
                </div>
            </div>
            <div className='w-200'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;