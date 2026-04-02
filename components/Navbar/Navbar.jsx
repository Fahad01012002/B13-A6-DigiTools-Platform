import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-6'>
            <div>
                <h2 className='text-[#4F39F6] font-bold text-3xl'>DigiTools</h2>
            </div>
            <div>
                <ul className='md:flex items-center gap-7 font-semibold cursor-pointer hidden'>
                    <li className='hover:text-[#4F39F6]'>Products</li>
                    <li className='hover:text-[#4F39F6]'>Features</li>
                    <li className='hover:text-[#4F39F6]'>Pricing</li>
                    <li className='hover:text-[#4F39F6]'>Testimonials</li>
                    <li className='hover:text-[#4F39F6]'>FAQ</li>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <ShoppingCart />
                <h2>Login</h2>
                <button className='btn bg-[#4F39F6] rounded-[20px] text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;