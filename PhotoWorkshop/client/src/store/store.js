import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);

    return { store, persistor };
};
// const store = createStore(rootReducer, applyMiddleware(thunk));
