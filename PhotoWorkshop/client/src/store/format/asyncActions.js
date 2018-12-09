import { getFormatListFetch } from '../../api/format';
import { getFormatListRequest, getFormatListSuccess, getFormatListFailure } from './actionCreators';

export  const getFormatList = () => {
    return dispatch => {
        dispatch(getFormatListRequest());
        getFormatListFetch()
            .then(json => dispatch(getFormatListSuccess(json)))
            .catch(error => dispatch(getFormatListFailure(error)));
    };
};
