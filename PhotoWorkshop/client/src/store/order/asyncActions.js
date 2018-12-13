import { getCustomerOrderListFetch } from '../../api/order';
import { getCustomerOrderListRequest, getCustomerOrderListSuccess } from './actionCreators';

export  const getCustomerOrderList = (payload) => {
    return dispatch => {
        dispatch(getCustomerOrderListRequest(payload));
        getCustomerOrderListFetch()
            .then(json => dispatch(getCustomerOrderListSuccess(json)));
    };
};
