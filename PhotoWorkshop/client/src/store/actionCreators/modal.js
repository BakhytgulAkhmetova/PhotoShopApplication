import * as actions from '../actions/modal';

export const openModal = () => {
    return { type: actions.OPEN_MODAL };
};

export const fillHeader = (payload) => {
    return {
        type: actions.FILL_HEADER,
        payload
    };
};

export const fillContent = (payload) => {
    return {
        type: actions.FILL_CONTENT,
        payload
    };
};

export const changeStyle = (payload) => {
    return {
        type: actions.CHANGE_STYLE,
        payload
    };
};

export const closeModal = () => {
    return { type: actions.CLOSE_MODAL };
};
