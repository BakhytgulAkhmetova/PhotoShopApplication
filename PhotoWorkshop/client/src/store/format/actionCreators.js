import * as actions from './actions';

export const getFormatListRequest = () => {
    return { type: actions.GET_FORMAT_LIST_REQUEST };
};


export const getFormatListSuccess = (payload) => {
    return {
        type: actions.GET_FORMAT_LIST_SUCCESS,
        payload
    };
};

export const getFormatListFailure = (payload) => {
    return {
        type: actions.GET_FORMAT_LIST_FAILURE,
        payload
    };
};
