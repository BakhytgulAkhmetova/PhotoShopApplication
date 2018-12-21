import { getManagerByLoginPasswordFetch } from '../../api/manager';
import * as action  from './actionCreators';

export  const getManagerrByLoginPassword = (login, password) => {
    return async dispatch => {
        await dispatch(action.getManagerByLoginPasswordRequest());
        return await getManagerByLoginPasswordFetch(login, password)
            .then(json => json);
    };
};
