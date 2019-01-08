import * as type from './actions';

export const getHeadByLoginPasswordRequest = () => {
    return { type: type.GET_HEAD_BY_LOGIN_PASSWORD_REQUEST };
};

export const getHeadByLoginPasswordSuccess = (payload) => {
    return {
        type: type.GET_HEAD_BY_LOGIN_PASSWORD_SUCCESS,
        payload
    };
};

export  const getCurrentHead = (payload) => {
    return {
        type: type.GET_CURRENT_HEAD,
        payload
    };
};
