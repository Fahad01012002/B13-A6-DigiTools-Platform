import CardDisplay from './CardsDisplay/CardDisplay';

const Card = ({ data , cartsCard , setCartsCard }) => {

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
               data.map((data, index) => {
                    return (
                        <CardDisplay data={data} key={index} cartsCard={cartsCard} setCartsCard={setCartsCard} />
                    )
               })
            }
        </div>
    );
};

export default Card;