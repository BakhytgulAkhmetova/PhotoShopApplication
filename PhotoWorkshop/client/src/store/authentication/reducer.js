import { default as initialStateAuth } from './initialState';
import * as types from './actions';

export const authentication = (state = initialStateAuth, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
            // case types.AUTHENTICATE_MANAGER:
            //     return {
            //         ...state,
            //         isAuthenticatedManager: !state.isAuthenticatedManager
            //     };

        case types.REGISTRATE:
            return {
                ...state,
                isRegistrated: !state.isRegistrated
            };

        case types.SIGN_OUT:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated,
                isRegistrated: !state.isRegistrated
            };
        default:
            return state;
    }
};
