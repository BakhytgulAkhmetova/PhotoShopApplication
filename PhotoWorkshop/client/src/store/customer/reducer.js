import { default as customerInitialState } from './initilalState';
import * as types from './actions';

export const customer = (state = customerInitialState, action) => {
    switch (action.type) {
        case types.ADD_CUSTOMER_REQUEST:
            return state;

        case types.ADD_CUSTOMER_SUCCESS:
            return  {
                ...state,
                list: state.list.concat([action.payload])
            };
        case types.ADD_CUSTOMER_FAILURE:
            return { error: action.payload };

        case types.GET_LAST_CUSTOMER_REQUEST:
            return state;

        case types.GET_LAST_CUSTOMER_SUCCESS:
            return  {
                ...state,
                current: action.payload[0]
            };

        case types.GET_LAST_CUSTOMER_FAILURE:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};
