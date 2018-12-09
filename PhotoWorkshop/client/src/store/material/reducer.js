import { default as materialInitialState } from './initilalState';
import * as types from './actions';

export const material = (state = materialInitialState, action) => {
    switch (action.type) {
        case types.GET_MATERIAL_LIST_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case types.GET_MATERIAL_LIST_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading,
                materialList: action.payload
            };
        case types.GET_MATERIAL_LIST_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            };
        default:
            return state;
    }
};
