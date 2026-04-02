import React from 'react';
import facebook from '../../assets/Icon/facebook.png';
import twiter from '../../assets/Icon/Twiter.png';
import instagram from '../../assets/Icon/Instagram.png';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-30 pb-8'>
            <div className='w-11/12 mx-auto items-center text-white grid grid-cols-8 gap-10'>
                <div className='col-span-3 space-y-4'>
                    <h2 className='font-extrabold text-[40px]'>DigiTools</h2>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='grid grid-cols-3 col-span-3'>
                    <div className='space-y-4'>
                        <h2 className='font-bold text-[18px]'>Product</h2>
                        <p>Feature</p>
                        <p>Pricing</p>
                        <p>Template</p>
                        <p>Integration</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='font-bold text-[18px]'>Company</h2>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='font-bold text-[18px]'>Resources</h2>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-center col-span-2 space-y-4'>
                    <h2>Social Links</h2>
                    <div className='flex justify-center gap-3'>
                        <img className='bg-white rounded-full p-2' src={facebook} alt="" />
                        <img className='bg-white rounded-full p-2' src={instagram} alt="" />
                        <img className='bg-white rounded-full p-2' src={twiter} alt="" />
                    </div>
                </div>

            </div>

              <div className="divider divider-neutral w-11/12 mx-auto mt-20"></div>

            <div className='flex justify-between items-center text-white w-11/12 mx-auto'>
                <div>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex justify-center gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;