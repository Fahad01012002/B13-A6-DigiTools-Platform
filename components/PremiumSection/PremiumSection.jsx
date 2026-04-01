import { PackagePlus } from 'lucide-react';
import React from 'react';

const PremiumSection = () => {

    const handleButton = ()=> {
        
    }

    return (
        <div className='space-y-3'>
            <div className='space-y-3 text-center'>
                <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
                <p className='text-[#627382] leading-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='text-center'>
                <button onClick={() => handleButton()} className='btn'>Products</button>
                <button className='btn'>Cart ( 0 ) </button>
            </div>
        </div>
    );
};

export default PremiumSection;