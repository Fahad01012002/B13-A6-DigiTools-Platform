import React from 'react';
import user from '../../assets/user.png';
import pack from '../../assets/package.png';
import play from '../../assets/play.png';

const GetStarted = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 mb-30 mt-10'>
            <div className='p-6 h-95 shadow-sm rounded-xl'>
                <div className='relative'>
                    <h2 className='absolute top-2 right-2 text-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-2 py-1 text-white'>01</h2>
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
                    <h2 className='absolute top-2 right-2 text-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-2 py-1 text-white'>02</h2>
                </div>

                <div className='text-center flex flex-col justify-center items-center mt-20 space-y-2'>
                    <div className='p-3 border border-gray-200 rounded-full bg-[#9614fa16]'>

                        <img src={pack} alt="" />
                    </div>
                    <h2 className='font-bold text-[23px]'>Choose Products</h2>
                    <p className='leading-5 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>
            <div className='p-6 h-95 shadow-sm rounded-xl'>
                <div className='relative'>
                    <h2 className='absolute top-2 right-2 text-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-2 py-1 text-white'>03</h2>
                </div>

                <div className='text-center flex flex-col justify-center items-center mt-20 space-y-2'>
                    <div className='p-3 border border-gray-200 rounded-full bg-[#9614fa16]'>

                        <img className='w-15' src={play} alt="" />
                    </div>
                    <h2 className='font-bold text-[23px]'>Start Creating</h2>
                    <p className='leading-5 text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
            </div>


        </div>
    );
};

export default GetStarted;