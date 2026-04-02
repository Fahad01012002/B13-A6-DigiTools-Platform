import { ShoppingCart } from 'lucide-react';
import CartDisplay from './CartDisplay';
import { toast } from 'react-toastify';

const CartsCard = ({ cartsCard, setCartsCard }) => {


    const handleRemove = (card) => {
        const filterCard = cartsCard.filter(
            cartCard => cartCard.name != card.name)
        setCartsCard(filterCard);

        toast.success('Card are remove successfully');
    }

    const removeCartCard = () => {
        setCartsCard([]);
        toast.success("Processing for Chechout");
    }

    const totalPrice = cartsCard.reduce((total, item) => total + item.price, 0);

    if (cartsCard.length === 0) {
        return (
            <div className='border border-gray-200 p-10 my-10 rounded-xl shadow-xs'>
                <div className='font-bold mb-20'>
                    Your Cart
                </div>
                <div className='flex justify-center items-center mb-4'><ShoppingCart size={100} /></div>
                <h2 className='text-center text-2xl'>Your cart is empty</h2>

            </div>
        );

    }

    return (

        <div className='shadow-sm p-10 border border-gray-100'>
            <h2 className='font-bold mb-5'>Your cart</h2>
            {
                cartsCard.map((cart, index) => {

                    return (
                        <CartDisplay cart={cart} key={index} handleRemove={handleRemove} />
                    )
                })
            }

            <div className='space-y-5'>
                <div className='flex justify-between items-center border border-gray-200 px-10 py-5 rounded-xl'>
                    <h2 className='font-bold text-[15px]'>
                        Total
                    </h2>
                    <h1 className='font-bold '>${totalPrice}</h1>
                </div>
                <button onClick={() => removeCartCard()} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white '>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default CartsCard;