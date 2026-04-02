import React from 'react';

const Transform = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='py-30 w-11/12 mx-auto text-white text-center space-y-4'>
                <div>
                    <h2 className='font-extrabold text-[40px] mb-4'>Ready to Transform Your Workflow?</h2>
                    <p className='mb-10'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                </div>

                <div className='space-x-4'>
                    <button className='btn rounded-full text-[#9514FA]'>Explore Products</button>
                    <button className='btn rounded-full text-white border-white bg-transparent'>View Pricing</button>
                </div>
                <p>14-day free trial  •  No credit card required  •  Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;