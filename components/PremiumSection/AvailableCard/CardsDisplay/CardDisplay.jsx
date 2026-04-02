import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CardDisplay = ({ cartsCard, data, setCartsCard }) => {

    const handleCartCard = (data) => {
        setCartsCard([...cartsCard, data]);
        setIsSelected(true);

        toast.success('Card added to the cart');
    }
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <span
                        className={`badge badge-xs ${data.tagType === 'best-seller'
                            ? 'badge_warning'
                            : data.tagType === 'popular'
                                ? 'badge_success'
                                : data.tagType === 'new'
                                    ? 'badge_purple'
                                    : ''
                            }`}
                    >
                        {data.tag}
                    </span>
                    <div className='p-3 border border-gray-200 rounded-full w-15'><img className='w-8' src={data.image} alt="" /></div>
                    <div className="space-y-4 mb-4">
                        <h2 className="font-bold text-[24px]">{data.name}</h2>
                        <p className='text-[#627382]'>{data.description}</p>
                        <span className=""><span className='font-bold text-[24px]'>${data.price}</span>/Mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            data.features.map(feature => {
                                return (
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='font-medium text-[15px]'>{feature}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="mt-6">
                        <button
                            onClick={() => handleCartCard(data)}
                            className={`
            btn btn-block rounded-full 
            text-white
            ${isSelected ? 'bg-success' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}
            disabled:text-white disabled:opacity-70 disabled:cursor-not-allowed`}
                            disabled={isSelected}>
                            {isSelected ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Added to Cart
                                </>
                            ) : (
                                'Buy Now'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDisplay;