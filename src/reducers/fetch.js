import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/constants';

export const productListReducer = ( curState = {
    isLoading: null,
    products: [],
    error: null
}, action ) => {
    let newState;

    switch( action.type ) {
        case FETCH_PRODUCTS:
            newState = { ...curState, error: null, isLoading: FETCH_PRODUCTS };
            break;
        case FETCH_PRODUCTS_SUCCESS:
            newState = { ...curState, isLoading: FETCH_PRODUCTS_SUCCESS, products: action.payload.products };
            break;
        case FETCH_PRODUCTS_FAILURE:
            newState = { ...curState, isLoading: FETCH_PRODUCTS_FAILURE, products: [], error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}