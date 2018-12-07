import { addCustomerFetch } from '../../api/customer';
import { addCustomerRequest, addCustomerSuccess, addCustomerFailure } from './actionCreators';

export  const addCustomer = (payload) => {
    return dispatch => {
        dispatch(addCustomerRequest(payload));
        addCustomerFetch()
            .then(json => dispatch(addCustomerSuccess(json)))
            .catch(error => dispatch(addCustomerFailure(error)));
    };
};
