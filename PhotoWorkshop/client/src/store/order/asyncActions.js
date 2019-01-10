import { getCustomerOrderListFetch, addOrderFetch, getAllOrderListFetch,
    updateOrderStatusFetch, deleteOrderFetch,
    getOrderListByDateRangeFetch
} from '../../api/order';
import { getCustomerOrderListRequest, getCustomerOrderListSuccess,
    getAllOrderListRequest, getAllOrderListSuccess,
    deleteOrderRequest, deleteOrderSuccess,
    getOrderListByDateRangeRequest, getOrderListByDateRangeSuccess,
    updateOrderStatusRequest, updateOrderStatusSuccess } from './actionCreators';

export  const getCustomerOrderList = (payload) => {
    return async dispatch => {
        await dispatch(getCustomerOrderListRequest(payload));
        await getCustomerOrderListFetch(payload)
            .then(json => dispatch(getCustomerOrderListSuccess(json)));
    };
};

export  const getAllOrderList = () => {
    return async dispatch => {
        await dispatch(getAllOrderListRequest());
        await getAllOrderListFetch()
            .then(json => dispatch(getAllOrderListSuccess(json)));
    };
};

export  const getOrderListByDateRange = (start, end) => {
    return async dispatch => {
        await dispatch(getOrderListByDateRangeRequest());
        await getOrderListByDateRangeFetch(start, end)
            .then(json => dispatch(getOrderListByDateRangeSuccess(json)));
    };
};

export  const addOrder = (order) => {
    return async () => {
        await addOrderFetch(order);
    };
};


export  const updateOrderStatus = (updateOptions, id) => {
    return async dispatch => {
        await dispatch(updateOrderStatusRequest());
        await updateOrderStatusFetch(updateOptions, id)
            .then(json => dispatch(updateOrderStatusSuccess(json)));
    };
};

export  const deleteOrder = (id) => {
    return async dispatch => {
        await dispatch(deleteOrderRequest());
        await deleteOrderFetch(id)
            .then(json => dispatch(deleteOrderSuccess(json)));
    };
};
