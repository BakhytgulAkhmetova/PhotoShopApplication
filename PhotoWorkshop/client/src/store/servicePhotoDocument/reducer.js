import { default as servicePhotoDocumentlInitialState } from './initilalState';
import * as types from './actions';

export const servicePhotoDocument = (state = servicePhotoDocumentlInitialState, action) => {
    switch (action.type) {
        case types.GET_SERVICE_PHOTO_DOC_LIST_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case types.GET_SERVICE_PHOTO_DOC_LIST_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading,
                data: action.payload
            };
        case types.GET_SERVICE_PHOTO_DOC_LIST_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            };
        default:
            return state;
    }
};
