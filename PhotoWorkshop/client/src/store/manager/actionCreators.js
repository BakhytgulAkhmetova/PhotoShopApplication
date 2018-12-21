import * as type from './actions';

export const getManagerByLoginPasswordRequest = () => {
    return { type: type.GET_MANAGER_BY_LOGIN_PASSWORD_REQUEST };
};

export const getManagerByLoginPasswordSuccess = (payload) => {
    return {
        type: type.GET_MANAGER_BY_LOGIN_PASSWORD_SUCCESS,
        payload
    };
};

// export  const getCurrentManager = (payload) => {
//     return {
//         type: type.GET_CURRENT_CUSTOMER,
//         payload
//     };
// };
