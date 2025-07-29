import { ADD_to_CART, REMOVE_to_CART } from './Constants';

export function addtocart(val) {
    return {
        type: ADD_to_CART,
        data: val
    };
}

export function RemovetoCart(id) {
    return {
        type: REMOVE_to_CART,
        data: id 
    };
}
