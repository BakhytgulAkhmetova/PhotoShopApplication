import { getServiceAdditionalListFetch } from '../../api/serviceAdditional';
import {
    getServiceAdditionalListRequest,
    getServiceAdditionalListSuccess,
    getServiceAdditionalListFailure } from './actionCreators';

export  const getServiceAdditionalList = () => {
    return dispatch => {
        dispatch(getServiceAdditionalListRequest());
        getServiceAdditionalListFetch()
            .then(json => dispatch(getServiceAdditionalListSuccess(json)))
            .catch(error => dispatch(getServiceAdditionalListFailure(error)));
    };
};
