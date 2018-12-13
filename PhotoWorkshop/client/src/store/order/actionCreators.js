import * as actions from './actions';

export const getCustomerOrderListRequest = () => {
    return { type: actions.GET_CUSTOMER_ORDER_LIST_REQUEST };
};


export const getCustomerOrderListSuccess = (payload) => {
    return {
        type: actions.GET_CUSTOMER_ORDER_LIST_SUCCESS,
        payload
    };
};
