import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';
import CartReducer from './CartReducer';
import FilterReducer from './FilterReducer';

const CartContext = createContext();
faker.seed(81)
export const useCart = () => useContext(CartContext);

export default function CartProvider({children}) {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url({ width: 400, height: 400 }), // Generates a random image URL
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]), // Updated to `helpers.arrayElement`
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]), // Updated to `helpers.arrayElement`
    }));

    //this is the states we have available
    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })

    /* here is where we handle the filters */
    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        SearchQuery: ""
    })

    //const value = {}

  return (
    <CartContext.Provider value={{ state, dispatch, filterState, filterDispatch }}>
        {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
