import { getHeadByLoginPasswordFetch } from '../../api/head';
import * as action  from './actionCreators';

export  const getHeadByLoginPassword = (login, password) => {
    return async dispatch => {
        await dispatch(action.getHeadByLoginPasswordRequest());
        return await getHeadByLoginPasswordFetch(login, password)
            .then(json => json);
    };
};
