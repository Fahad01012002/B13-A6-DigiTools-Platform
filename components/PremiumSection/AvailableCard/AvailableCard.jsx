import React, { Suspense, useEffect, useState } from 'react';
import Card from './Card';

const AvailableCard = ({ cartsCard, setCartsCard }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        < div >
            {/* <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            </Suspense> */}
            <Card data={data} cartsCard={cartsCard} setCartsCard={setCartsCard}></Card>
        </div >
    );
};

export default AvailableCard;