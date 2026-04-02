import React, { useEffect, useState } from 'react';

const PriceCard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./CardData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                data.map(item => (
                    <div key={item.id} className={`relative p-4 rounded-xl shadow-sm flex flex-col justify-between space-y-5 mb-30 ${item.name === 'Pro' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-gray-100'}`}>
                        <span className={`absolute -top-3 left-45 badge bg-[#FEF3C6] text-[#BB4D00] rounded-full ${item.id === 2 ? '' : 'hidden'}`}>{item.id === 2 ? 'Most Popular' : ''}</span>
                        <div>
                            <h2 className='font-bold text-[24px]'>{item.name}</h2>
                            <p className={`${item.name === 'Pro' ? 'text-white' : 'text-[#627382]'}`}>{item.description}</p>
                        </div>
                        <div>
                            <h2><span className='font-bold text-[40px]'>${item.price}</span>/Month</h2>
                        </div>

                        <ul>
                            {
                                item.features.map(feature => (
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block ${item.name === 'Pro' ? '' : 'text-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='font-medium text-[15px]'>{feature}</span>
                                    </li>

                                ))
                            }
                        </ul>
                        <button className={`btn rounded-full btn-block ${item.name === 'Starter' ? 'bg-[#4F39F6] text-white' : item.name === 'Pro' ? 'text-[#9514FA]' : 'bg-[#4F39F6] text-white'}`}>
                            {`${item.name === 'Starter'
                                ? "Get Started Free" :
                                item.name === 'Pro' ? "Start Pro Trial" :
                                    "Contact Sales"}`
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default PriceCard;