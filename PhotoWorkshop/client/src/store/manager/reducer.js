import { default as managerInitialState } from './initilalState';
import * as types from './actions';

export const manager = (state = managerInitialState, action) => {
    switch (action.type) {
        case types.GET_MANAGER_BY_LOGIN_PASSWORD_REQUEST:
            return  {
                ...state,
                isFetching: !state.isFetching
            };

        case types.GET_MANAGER_BY_LOGIN_PASSWORD_SUCCESS:
            return  {
                ...state,
                isFetching: !state.isFetching
            };
        case types.GET_CURRENT_MANAGER:
            return  {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};
