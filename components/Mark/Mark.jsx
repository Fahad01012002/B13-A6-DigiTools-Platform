import React from 'react';

const Mark = () => {
    return (
        <div className='flex justify-around items-center p-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-30'>
            <div>
                <h2 className='font-extrabold text-[60px] text-white'>50K+</h2>
                <p className='font-medium text-[24px] text-white'>Active Users</p>
            </div>
            <div>
                <h2 className='font-extrabold text-[60px] text-white'>200+</h2>
                <p className='font-medium text-[24px] text-white'>Premium Tools</p>
            </div>
            <div>
                <h2 className='font-extrabold text-[60px] text-white'>4.9</h2>
                <p className='font-medium text-[24px] text-white'>Ratting</p>
            </div>
        </div>
    );
};

export default Mark;