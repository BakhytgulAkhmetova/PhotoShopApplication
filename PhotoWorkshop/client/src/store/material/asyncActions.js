import { getMaterialListFetch } from '../../api/material';
import { getMaterialListRequest, getMaterialListSuccess, getMaterialListFailure } from './actionCreators';

export  const getMaterialList = () => {
    return dispatch => {
        dispatch(getMaterialListRequest());
        getMaterialListFetch()
            .then(json => dispatch(getMaterialListSuccess(json)))
            .catch(error => dispatch(getMaterialListFailure(error)));
    };
};
