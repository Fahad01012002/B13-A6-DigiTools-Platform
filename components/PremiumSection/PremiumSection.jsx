import { CardSim, PackagePlus } from 'lucide-react';
import React, { useState } from 'react';
import AvailableCard from './AvailableCard/AvailableCard';
import CartsCard from './CartCard/CartsCard';

const PremiumSection = () => {

    const [handleButton , setHandleButton] = useState('products');
    // const handleButton = ()=> {

    // }

    return (
        <div className='space-y-3'>
            <div className='space-y-3 text-center'>
                <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
                <p className='text-[#627382] leading-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='text-center space-x-2'>
                <button onClick={() => setHandleButton('products')} className={`btn rounded-[20px] ${handleButton === 'products' ? 'bg-[#4F39F6] text-white' : "bg-white"}`}>Products</button>
                <button onClick={() => setHandleButton('carts')} className={`btn rounded-[20px] ${handleButton === 'carts' ? 'bg-[#4F39F6] text-white' : "bg-white"}`}>Cart ( 0 ) </button>
            </div>

            {
                handleButton === 'products' ? <AvailableCard /> : <CartsCard />
            }
        </div>
    );
};

export default PremiumSection;