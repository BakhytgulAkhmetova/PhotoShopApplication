import * as actions from '../actions/customer';

const addCustomerRequest = () => {
    return {
        type: actions.ADD_CUSTOMER_REQUEST
    };
};


const addCustomerSuccess = (payload) => {
    return {
        type: actions.ADD_CUSTOMER_SUCCESS,
        payload
    };
};

const addCustomerFailure = (payload) => {
    return {
        type: actions.ADD_CUSTOMER_FAILURE,
        payload
    };
};

export  const addCustomer = (payload) => {
    return dispatch => {
        console.log(JSON.stringify(payload));
        dispatch(addCustomerRequest(payload));
        return fetch('http://localhost:4000/customer/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache',
            body: JSON.stringify(payload) })
            .then(response => response.json())
            .then(json => dispatch(addCustomerSuccess(json)))
            .catch(error => dispatch(addCustomerFailure(error)));
    };
};
