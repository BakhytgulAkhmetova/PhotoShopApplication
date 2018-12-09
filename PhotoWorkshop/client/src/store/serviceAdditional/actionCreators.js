import * as actions from './actions';

export const getServiceAdditionalListRequest = () => {
    return { type: actions.GET_SERVICE_ADDITIONAL_LIST_REQUEST };
};


export const getServiceAdditionalListSuccess = (payload) => {
    return {
        type: actions.GET_SERVICE_ADDITIONAL_LIST_SUCCESS,
        payload
    };
};

export const getServiceAdditionalListFailure = (payload) => {
    return {
        type: actions.GET_SERVICE_ADDITIONAL_LIST_FAILURE,
        payload
    };
};
