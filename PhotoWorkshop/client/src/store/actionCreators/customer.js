import * as actions from '../actions/customer';

export const addCustomer = (payload) => {
    return {
        type: actions.ADD_CUSTOMER,
        payload
    };
};
