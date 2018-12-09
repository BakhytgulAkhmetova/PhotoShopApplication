import * as actions from './actions';

export const getServicePhotoDocumentListRequest = () => {
    return { type: actions.GET_SERVICE_PHOTO_DOC_LIST_REQUEST };
};


export const getServicePhotoDocumentListSuccess = (payload) => {
    return {
        type: actions.GET_SERVICE_PHOTO_DOC_LIST_SUCCESS,
        payload
    };
};

export const getServicePhotoDocumentListFailure = (payload) => {
    return {
        type: actions.GET_SERVICE_PHOTO_DOC_LIST_FAILURE,
        payload
    };
};
