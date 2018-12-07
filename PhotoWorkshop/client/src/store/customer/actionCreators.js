import * as actions from './actions';

export const addCustomerRequest = () => {
    return {
        type: actions.ADD_CUSTOMER_REQUEST
    };
};


export const addCustomerSuccess = (payload) => {
    return {
        type: actions.ADD_CUSTOMER_SUCCESS,
        payload
    };
};

export const addCustomerFailure = (payload) => {
    return {
        type: actions.ADD_CUSTOMER_FAILURE,
        payload
    };
};
