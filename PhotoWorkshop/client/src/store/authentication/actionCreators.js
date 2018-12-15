import * as actions from './actions';

export const authenticate = () => {
    return { type: actions.AUTHENTICATE };
};

export const registrate = () => {
    return { type: actions.REGISTRATE };
};

export const signout = () => {
    return { type: actions.SIGN_OUT };
};
