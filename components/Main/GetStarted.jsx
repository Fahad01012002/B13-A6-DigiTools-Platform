import React from 'react';
import user from '../../assets/user.png';

const GetStarted = () => {
    return (
        <div className='grid grid-cols-3 gap-5 mb-30 mt-10'>
            <div className='p-6 h-95 shadow-sm rounded-xl'>
                <div className='relative'>
                    <h2 className='absolute top-2 right-2 text-end bg-blue-500 rounded-full px-2 py-1 text-white'>01</h2>
                </div>

                <div className='text-center flex flex-col justify-center items-center mt-20 space-y-2'>
                    <div className='p-3 border border-gray-200 rounded-full bg-[#9614fa16]'>

                        <img src={user} alt="" />
                    </div>
                    <h2 className='font-bold text-[23px]'>Create Account</h2>
                    <p className='leading-5 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
            <div className='p-6 h-95 shadow-sm rounded-xl'>
                <div className='relative'>
                    <h2 className='absolute top-2 right-2 text-end bg-blue-500 rounded-full px-2 py-1 text-white'>01</h2>
                </div>

                <div className='text-center flex flex-col justify-center items-center mt-20 space-y-2'>
                    <div className='p-3 border border-gray-200 rounded-full bg-[#9614fa16]'>

                        <img src={user} alt="" />
                    </div>
                    <h2 className='font-bold text-[23px]'>Create Account</h2>
                    <p className='leading-5 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
            <div className='p-6 h-95 shadow-sm rounded-xl'>
                <div className='relative'>
                    <h2 className='absolute top-2 right-2 text-end bg-blue-500 rounded-full px-2 py-1 text-white'>01</h2>
                </div>

                <div className='text-center flex flex-col justify-center items-center mt-20 space-y-2'>
                    <div className='p-3 border border-gray-200 rounded-full bg-[#9614fa16]'>

                        <img src={user} alt="" />
                    </div>
                    <h2 className='font-bold text-[23px]'>Create Account</h2>
                    <p className='leading-5 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>

             
        </div>
    );
};

export default GetStarted;