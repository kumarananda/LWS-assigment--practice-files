import { ADD_CART } from "./actionTypes";
import initialState from "./initialState";


const nextCartId = (carts) => {
    const maxId = carts.reduce((maxId, cart) => Math.max(cart.cartId, maxId), -1);
    return maxId + 1;
};

// create reucer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const matchProduct = state.filter(CartProd => CartProd.productId === action.payload.productId )

            switch (matchProduct.length === 0) {
                case  true :
                    return [
                        ...state,
                        {
                            cartItem: action.payload.cartItem,
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
            
                
            }

        default:
            return state;
    }
}

export default reducer ;