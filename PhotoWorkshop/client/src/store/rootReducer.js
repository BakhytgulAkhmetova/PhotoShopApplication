import { combineReducers } from 'redux';

import { customer } from './customer/reducer';
import { manager } from './manager/reducer';
import { head } from './head/reducer';
import { order } from './order/reducer';
import { modal } from './modal/reducer';
import { format } from './format/reducer';
import { authentication } from './authentication/reducer';
import { material } from './material/reducer';
import { serviceAdditional } from './serviceAdditional/reducer';
import { servicePhotoDocument } from './servicePhotoDocument/reducer';
import { servicePhotoShoot } from './servicePhotoShoot/reducer';

export const rootReducer = combineReducers({
    customer,
    manager,
    order,
    head,
    format,
    material,
    authentication,
    serviceAdditional,
    servicePhotoDocument,
    servicePhotoShoot,
    modal
});
