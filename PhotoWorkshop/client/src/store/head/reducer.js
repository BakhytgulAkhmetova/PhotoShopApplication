import { default as headInitialState } from './initilalState';
import * as types from './actions';

export const head = (state = headInitialState, action) => {
    switch (action.type) {
        case types.GET_HEAD_BY_LOGIN_PASSWORD_REQUEST:
            return  {
                ...state,
                isFetching: !state.isFetching
            };

        case types.GET_HEAD_BY_LOGIN_PASSWORD_SUCCESS:
            return  {
                ...state,
                isFetching: !state.isFetching
            };
        case types.GET_CURRENT_HEAD:
            return  {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};
