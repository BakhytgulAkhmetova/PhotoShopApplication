import { getServicePhotoShootListFetch } from '../../api/servicePhotoShoot';
import {
    getServicePhotoShootListRequest,
    getServicePhotoShootListSuccess,
    getServicePhotoShootListFailure } from './actionCreators';

export  const getServicePhotoShootList = () => {
    return dispatch => {
        dispatch(getServicePhotoShootListRequest());
        getServicePhotoShootListFetch()
            .then(json => dispatch(getServicePhotoShootListSuccess(json)))
            .catch(error => dispatch(getServicePhotoShootListFailure(error)));
    };
};
