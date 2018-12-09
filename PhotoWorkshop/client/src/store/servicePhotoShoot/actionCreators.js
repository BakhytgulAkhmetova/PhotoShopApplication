import * as actions from './actions';

export const getServicePhotoShootListRequest = () => {
    return { type: actions.GET_SERVICE_PHOTO_SHOOT_LIST_REQUEST };
};


export const getServicePhotoShootListSuccess = (payload) => {
    return {
        type: actions.GET_SERVICE_PHOTO_SHOOT_LIST_SUCCESS,
        payload
    };
};

export const getServicePhotoShootListFailure = (payload) => {
    return {
        type: actions.GET_SERVICE_PHOTO_SHOOT_LIST_FAILURE,
        payload
    };
};
