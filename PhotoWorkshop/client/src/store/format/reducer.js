import { default as formatInitialState } from './initilalState';
import * as types from './actions';

export const format = (state = formatInitialState, action) => {
    switch (action.type) {
        case types.GET_FORMAT_LIST_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case types.GET_FORMAT_LIST_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading,
                formatList: action.payload
            };
        case types.GET_FORMAT_LIST_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            };
        default:
            return state;
    }
};
