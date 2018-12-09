import { getServicePhotoDocumentListFetch } from '../../api/servicePhotoDocument';
import {
    getServicePhotoDocumentListRequest,
    getServicePhotoDocumentListSuccess,
    getServicePhotoDocumentListFailure } from './actionCreators';

export  const getServicePhotoDocumentList = () => {
    return dispatch => {
        dispatch(getServicePhotoDocumentListRequest());
        getServicePhotoDocumentListFetch()
            .then(json => dispatch(getServicePhotoDocumentListSuccess(json)))
            .catch(error => dispatch(getServicePhotoDocumentListFailure(error)));
    };
};
