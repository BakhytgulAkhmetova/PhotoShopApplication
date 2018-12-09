import { default as serviceAdditionalInitialState } from './initilalState';
import * as types from './actions';

export const serviceAdditional = (state = serviceAdditionalInitialState, action) => {
    switch (action.type) {
        case types.GET_SERVICE_ADDITIONAL_LIST_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case types.GET_SERVICE_ADDITIONAL_LIST_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading,
                data: action.payload
            };
        case types.GET_SERVICE_ADDITIONAL_LIST_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            };
        default:
            return state;
    }
};
