import * as actions from './actions';

export const authenticate = () => {
    return { type: actions.AUTHENTICATE };
};

export const signout = () => {
    return { type: actions.SIGN_OUT };
};
