import React, { use } from 'react';
import CardDisplay from './CardsDisplay/CardDisplay';

const Card = ({ cardsData , cartsCard , setCartsCard }) => {

    const Data = use(cardsData);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
               Data.map((data, index) => {
                    return (
                        <CardDisplay data={data} key={index} cartsCard={cartsCard} setCartsCard={setCartsCard} />
                    )
               })
            }
        </div>
    );
};

export default Card;