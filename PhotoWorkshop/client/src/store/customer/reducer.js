import { default as customerInitialState } from './initilalState';
import * as types from './actions';

export const customer = (state = customerInitialState, action) => {
    switch (action.type) {
        case types.ADD_CUSTOMER_REQUEST:
            return state;
        case types.ADD_CUSTOMER_SUCCESS:
            return  {
                ...state,
                customerList: state.customerList.concat([action.payload])
            };
        case types.ADD_CUSTOMER_FAILURE:
            return state;
        default:
            return state;
    }
};
