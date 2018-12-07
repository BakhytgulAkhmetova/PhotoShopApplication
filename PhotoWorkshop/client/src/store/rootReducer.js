import { combineReducers } from 'redux';

import { customer } from './customer/reducer';
import { modal } from './modal/reducer';

export const rootReducer = combineReducers({
    customer,
    modal
});
