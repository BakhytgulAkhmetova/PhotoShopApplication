import * as type from './actions';

export const addCustomerRequest = () => {
    return { type: type.ADD_CUSTOMER_REQUEST };
};

export const addCustomerSuccess = (payload) => {
    return {
        type: type.ADD_CUSTOMER_SUCCESS,
        payload
    };
};

export const addCustomerFailure = (payload) => {
    return {
        type: type.ADD_CUSTOMER_FAILURE,
        payload
    };
};

export const getLastCustomerRequest = () => {
    return { type: type.GET_LAST_CUSTOMER_REQUEST };
};

export const getLastCustomerSuccess = (payload) => {
    return {
        type: type.GET_LAST_CUSTOMER_SUCCESS,
        payload
    };
};

export const getLastCustomerFailure = (payload) => {
    return {
        type: type.GET_LAST_CUSTOMER_FAILURE,
        payload
    };
};

export const getCustomerByLoginPasswordRequest = () => {
    return { type: type.GET_CUSTOMER_BY_LOGIN_PASSWORD_REQUEST };
};

export const getCustomerByLoginPasswordSuccess = (payload) => {
    return {
        type: type.GET_CUSTOMER_BY_LOGIN_PASSWORD_SUCCESS,
        payload
    };
};
