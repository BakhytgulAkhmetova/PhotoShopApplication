import { customerList } from '../data';
import * as types from '../actions/customer';

export const customer = (state = customerList, action) => {
    switch (action.type) {
        case types.ADD_CUSTOMER:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
