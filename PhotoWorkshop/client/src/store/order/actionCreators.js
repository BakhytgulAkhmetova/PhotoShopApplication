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

export const cleanOrderList = () => {
    return { type: actions.CLEAN_ORDER_LIST };
};

export const getAllOrderListRequest = () => {
    return { type: actions.GET_ALL_ORDER_LIST_REQUEST };
};

export const getAllOrderListSuccess = (payload) => {
    return {
        type: actions.GET_ALL_ORDER_LIST_SUCCESS,
        payload
    };
};

export const updateOrderStatusRequest = () => {
    return { type: actions.UPDATE_ORDER_STATUS_REQUEST };
};

export const updateOrderStatusSuccess = () => {
    return {
        type: actions.UPDATE_ORDER_STATUS_SUCCESS
    };
};

export const deleteOrderRequest = () => {
    return { type: actions.DELETE_ORDER_REQUEST };
};

export const deleteOrderSuccess = () => {
    return {
        type: actions.DELETE_ORDER_SUCCESS
    };
};
