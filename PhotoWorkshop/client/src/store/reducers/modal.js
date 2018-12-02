import { initialStateModal } from '../data';
import * as types from '../actions/modal';

export const modal = (state = initialStateModal, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case types.FILL_HEADER:
            return {
                ...state,
                header: action.payload
            };
        case types.FILL_CONTENT:
            return {
                ...state,
                content: action.payload
            };
        case types.CHANGE_STYLE:
            return {
                ...state,
                style: action.payload
            };
        case types.CLOSE_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};
