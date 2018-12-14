import { addCustomerFetch,
    getLastCustomerFetch,
    getCustomerByLoginPasswordFetch } from '../../api/customer';
import * as action  from './actionCreators';
import * as actionOrder  from '../order/asyncActions';

export  const addCustomer = (payload) => {
    return dispatch => {
        dispatch(action.addCustomerRequest());
        addCustomerFetch(payload)
            .then(json => dispatch(action.addCustomerSuccess(json)))
            .catch(error => dispatch(action.addCustomerFailure(error)));
    };
};

export  const getLastCustomer = () => {
    return dispatch => {
        dispatch(action.getLastCustomerRequest());
        getLastCustomerFetch()
            .then(json => {
                dispatch(action.getLastCustomerSuccess(json));
                dispatch(actionOrder.getCustomerOrderList());
            });
    };
};

export  const getCustomerByLoginPassword = (login, password) => {
    return dispatch => {
        dispatch(action.getCustomerByLoginPasswordRequest());
        return getCustomerByLoginPasswordFetch(login, password)
            .then(json => json);
    };
};
