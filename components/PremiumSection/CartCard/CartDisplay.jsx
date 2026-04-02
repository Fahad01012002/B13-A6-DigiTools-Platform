import React from 'react';

const CartDisplay = ({ cart , handleRemove }) => {


    return (

        <div>
            <div className='flex justify-between items-center border border-gray-300 my-8 px-10 py-4 rounded-xl'>
                <div className='flex gap-7'>
                    <div className='flex justify-center items-center h-15 w-15 rounded-full border border-gray-200'><img className='h-10 w-10' src={cart.image} alt="" /></div>
                    <div>
                        <h2 className='font-semibold text-[17px]'>{cart.name}</h2>
                        <p className='font-medium'>${cart.price}</p>
                    </div>
                </div>
                <div className='text-red-600'>
                    <a onClick={() => handleRemove(cart)} href="#">Remove</a>
                </div>
            </div>
        </div>
    );
};

export default CartDisplay;