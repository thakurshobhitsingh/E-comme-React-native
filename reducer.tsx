import { ADD_to_CART, REMOVE_to_CART } from './Constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_to_CART:
            return [...state, action.data];

        case REMOVE_to_CART:
            return state.filter(item => item.id !== action.data);

        default:
            return state;
    }
};
