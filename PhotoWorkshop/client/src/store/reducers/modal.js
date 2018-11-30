import { initialStateModal } from '../data';
import * as types from '../actions/modal';

export const modalReducer = (state = { modal: initialStateModal }, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return { ...state };
        default:
            return state;
    }
};
