import { default as orderInitialState } from './initilalState';
// import * as types from './actions';

export const order = (state = orderInitialState, action) => {
    switch (action.type) {
        // case types.ADD_CUSTOMER_REQUEST:
        //     return state;
        // case types.ADD_CUSTOMER_SUCCESS:
        //     return  {
        //         ...state,
        //         customerList: state.customerList.concat([action.payload])
        //     };
        // case types.ADD_CUSTOMER_FAILURE:
        //     return state;
        default:
            return state;
    }
};
