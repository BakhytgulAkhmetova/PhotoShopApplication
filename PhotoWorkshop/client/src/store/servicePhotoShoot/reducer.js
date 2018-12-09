import { default as servicePhotoShootlInitialState } from './initilalState';
import * as types from './actions';

export const servicePhotoShoot = (state = servicePhotoShootlInitialState, action) => {
    switch (action.type) {
        case types.GET_SERVICE_PHOTO_SHOOT_LIST_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case types.GET_SERVICE_PHOTO_SHOOT_LIST_SUCCESS:
            return  {
                ...state,
                isLoading: !state.isLoading,
                data: action.payload
            };
        case types.GET_SERVICE_PHOTO_SHOOT_LIST_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            };
        default:
            return state;
    }
};
