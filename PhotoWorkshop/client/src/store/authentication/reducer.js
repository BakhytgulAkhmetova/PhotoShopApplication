import { default as initialStateAuth } from './initialState';
import * as types from './actions';

export const authentication = (state = initialStateAuth, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };

        case types.SIGN_OUT:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
        default:
            return state;
    }
};
