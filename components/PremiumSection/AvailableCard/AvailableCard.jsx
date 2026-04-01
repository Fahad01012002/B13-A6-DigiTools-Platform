import React, { Suspense } from 'react';
import Card from './Card';

const cardData = async () => {
    const res = await fetch('/Data.json')
    return res.json();
}

const AvailableCard = () => {
    const cardsData = cardData();
    return (
            < div >
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Card cardsData={cardsData}></Card>
            </Suspense>
        </div >
    );
};

export default AvailableCard;