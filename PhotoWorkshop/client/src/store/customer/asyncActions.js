import { addCustomerFetch,
    getLastCustomerFetch,
    getCustomerByLoginPasswordFetch } from '../../api/customer';
import * as action  from './actionCreators';
import * as actionOrder  from '../order/asyncActions';

export  const addCustomer = (payload) => {
    return async dispatch => {
        await dispatch(action.addCustomerRequest());
        await addCustomerFetch(payload);
        // debugger;

        // await dispatch(action.addCustomerSuccess(res));
    };
};

export  const getLastCustomer = () => {
    return async dispatch => {
        await dispatch(action.getLastCustomerRequest());
        const res = await getLastCustomerFetch();

        await dispatch(action.getLastCustomerSuccess(res));
        await dispatch(actionOrder.getCustomerOrderList());
    };
};

export  const getCustomerByLoginPassword = (login, password) => {
    return dispatch => {
        dispatch(action.getCustomerByLoginPasswordRequest());
        return getCustomerByLoginPasswordFetch(login, password)
            .then(json => json);
    };
};
