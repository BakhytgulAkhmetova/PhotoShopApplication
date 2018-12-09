import * as actions from './actions';

export const getMaterialListRequest = () => {
    return { type: actions.GET_MATERIAL_LIST_REQUEST };
};


export const getMaterialListSuccess = (payload) => {
    return {
        type: actions.GET_MATERIAL_LIST_SUCCESS,
        payload
    };
};

export const getMaterialListFailure = (payload) => {
    return {
        type: actions.GET_MATERIAL_LIST_FAILURE,
        payload
    };
};
