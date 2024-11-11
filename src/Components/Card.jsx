import { IoIosStar } from 'react-icons/io';
import { useCart } from '../Contexts/CartContext';

// eslint-disable-next-line react/prop-types
export default function Card({ prod }) {  // Destructure 'prod' directly from props
  const data = prod;  // Use 'prod' directly as 'data'
  const filledStars = data.ratings;
  const emptyStars = 5 - parseInt(data.ratings);
  
  //Yes, My context Varible is name CartContext, but in here we are using cart
  //This is because the cart context declared cart as part of the state, so we can access it here
  const {state: {cart}, dispatch} = useCart()


  return (
    <div className='w-[435px] card flex flex-col my-[10px]'>
        <img className='w-full' src={data.image} alt="" />
        <div className='pl-[15px] mt-[5px] font-sans'>
            <p className='text-2xl mb-[5px] text-bold'>{data.name}</p>
            <p className='text-md mb-[5px] text-bold'>R$ {data.price}</p>
            <p className='text-md mb-[5px] text-bold'>4 Days Delivery</p>
            <div className='flex items-center mb-[10px]'>
              {/* Render filled stars */}
              {Array.from({ length: filledStars }).map((_, index) => (
                <IoIosStar key={index} /> // Filled star (gold color)
              ))}
              {/* Render empty stars */}
              {Array.from({ length: emptyStars }).map((_, index) => (
                <IoIosStar key={index} style={{ color: 'gray' }} /> // Empty star (gray color)
              ))}
            </div>
            {
              //some is taking every item in the array, represented by p, and comparing it to the condition
              //similar to cart.map(cartItem => {})
              cart.some(p => p.id === data.id) 
              ? 
              (<button onClick={ () => {dispatch({type:'REMOVE_FROM_CART', payload: prod})}}
                className='px-2 py-4 mb-[25px] bg-red-600 hover:bg-red-900 cursor-pointer text-white min-w-[120px] rounded-md text-center' >
                  Remove From Cart
              </button>) 
              : 
              (<button onClick={ () => {
                dispatch({type:'ADD_TO_CART', payload: prod}) 
              }
              }
                className='px-2 py-4 mb-[25px] bg-blue-600 hover:bg-blue-900 cursor-pointer text-white w-[120px] rounded-md text-center' 
                disabled={data.inStock <= 0}>
                  {!data.inStock ? "Out of Stock" : "Add to Cart"}
              </button>)
            }
        </div>
    </div>
  );
}
