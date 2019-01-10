import { default as orderInitialState } from './initilalState';
import * as types from './actions';

export const order = (state = orderInitialState, action) => {
    switch (action.type) {
        case types.GET_CUSTOMER_ORDER_LIST_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.GET_CUSTOMER_ORDER_LIST_SUCCESS:
            return  {
                ...state,
                orderCustomerList: action.payload,
                isLoading: !state.isLoading
            };
        case types.UPDATE_ORDER_STATUS_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.UPDATE_ORDER_STATUS_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading
            };

        case types.DELETE_ORDER_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.DELETE_ORDER_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading
            };

        case types.CLEAN_ORDER_LIST:
            return { ...state, orderCustomerList: [] };

        case types.GET_ALL_ORDER_LIST_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.GET_ALL_ORDER_LIST_SUCCESS:
            return  {
                ...state,
                orderListAll: action.payload,
                isLoading: !state.isLoading
            };
        case types.GET_ORDER_LIST_BY_DATERANGE_REQUEST:
            return { ...state, isLoading: !state.isLoading };

        case types.GET_ORDER_LIST_BY_DATERANGE_SUCCESS:
            return  {
                ...state,
                orderListAll: action.payload,
                isLoading: !state.isLoading
            };
        default:
            return state;
    }
};
