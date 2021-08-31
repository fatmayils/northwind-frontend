import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems"
const initialState={
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payLoad}){
    switch (type) {
        case ADD_TO_CART:
let product=state.cartItems.find(c=>c.product.id===payLoad.id)
if (product) {
    product.quantity++;
    return{
        ...state
    }
}else{
    return{
        ...state,
        cartItems:[...state.cartItems,{quantity:1,product:payLoad}]
    }
}
            
    case REMOVE_FROM_CART:
        return{
            ...state,
            cartItems:state.cartItems.filter(c=>c.product.id!==payLoad.id)
        }
        default:
            return state
          
    }

}