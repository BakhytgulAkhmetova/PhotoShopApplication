import { customerList } from '../data';
import * as types from '../actions/customer';

export const customer = (state = customerList, action) => {
    switch (action.type) {
        case types.ADD_CUSTOMER_REQUEST:
            return state;
        case types.ADD_CUSTOMER_SUCCESS:
            return state.concat([action.payload]);
        case types.ADD_CUSTOMER_FAILURE:
            return state;
        default:
            return state;
    }
};
