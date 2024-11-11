

export default function CartReducer(state, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
        case "REMOVE_FROM_CART":
            return {...state, cart:state.cart.filter(c => c.id !== action.payload.id)}
        case "CHANGE_QTY_FROM_CART":
            return {...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: parseInt(action.payload.qty) } : item )}
        default:
            return state;   
    } 
}
