import React, { Suspense } from 'react';
import PriceCard from './PriceCard';

const Pricing = () => {
    return (
        <div className='mt-60'>
            <div className='text-center mb-10'>
                <h2 className='font-bold text-[23px]'>Simple, Transparent Pricing</h2>
                <p className='leading-5 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div>
                <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                    <PriceCard>
                        
                    </PriceCard>
                </Suspense>
            </div>
        </div>
    );
};

export default Pricing;