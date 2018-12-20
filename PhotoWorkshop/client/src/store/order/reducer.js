import { default as orderInitialState } from './initilalState';
import * as types from './actions';

export const order = (state = orderInitialState, action) => {
    debugger;
    switch (action.type) {
        case types.GET_CUSTOMER_ORDER_LIST_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.GET_CUSTOMER_ORDER_LIST_SUCCESS:
            return  {
                ...state,
                orderCustomerList: action.payload
            };
        case types.CLEAN_ORDER_LIST:
            return { ...state, orderCustomerList: [] };
        default:
            return state;
    }
};
