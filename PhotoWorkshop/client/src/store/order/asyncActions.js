import { getCustomerOrderListFetch, addOrderFetch, getAllOrderListFetch
} from '../../api/order';
import { getCustomerOrderListRequest, getCustomerOrderListSuccess,
    getAllOrderListRequest, getAllOrderListSuccess } from './actionCreators';

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

export  const addOrder = (order) => {
    return async dispatch => {
        await addOrderFetch(order);
        // const lastOrder = await getOrderLastFetch();
        // debugger;

        // const addDetails = () => {
        //     order.services.foreach(s => {
        //         addOrderDetailsFetch({
        //             detailId: s.id,
        //             detailName: s.name,
        //             orderId: lastOrder.ID
        //         });
        //     });
        // };

        // await addDetails();
    };
};
