import { CART_ADD, CART_DECREASE, CART_DELETE, CART_INCREASE } from "./actionTypes";
import initialState from "./initialState";


const nextCartId = (carts) => {
    const maxId = carts.reduce((maxId, cart) => Math.max(cart.cartId, maxId), -1);
    return maxId + 1;
};

// create reucer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            const matchProduct = state.filter(CartProd => CartProd.productId === action.payload.productId )

            switch (matchProduct.length === 0) {
                case  true :
                    return [
                        ...state,
                        {
                            // cartItem: action.payload.cartItem,
                            productId : action.payload.productId,
                            cartId : nextCartId(state),
                            count : 1,
                        }
                    ]
                case false :
                    return state.map(cart => {
                        if(cart.productId === action.payload.productId){
                            return {
                                ...cart,
                                count : cart.count + 1
                            }

                        }else{
                            return cart
                        }
                    })
                default : 
                    return state
                
            }

        case CART_DELETE:
            return state.filter( cart => cart.cartId !== action.payload )

        case CART_INCREASE:
            return state.map( cart => {
                if(cart.cartId === action.payload){
                   return {
                    ...cart,
                    count : cart.count + 1
                   } 
                }else{
                    return {
                        ...cart
                    }
                }
            } )
 

        case CART_DECREASE:
            return state.map( cart => {
                if(cart.cartId === action.payload){
                   return {
                    ...cart,
                    count : cart.count - 1
                   } 
                }else{
                    return {
                        ...cart
                    }
                }
            } )
 

        default:
            return state;
    }
}

export default reducer ;