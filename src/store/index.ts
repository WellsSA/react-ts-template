/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducers from 'modules/reducers';
import sagas from 'modules/sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function configureStore() {
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV !== `production`) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
  }
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication'],
  };
  const rootReducer = (state, action) => {
    if (action.type === 'AUTHENTICATION_LOGOUT_REQUEST') {
      state = undefined;
    }
    // @ts-ignore
    return reducers(state, action);
  };
  const enhancer = compose(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}

const { store, persistor } = configureStore();

sagaMiddleware.run(sagas);

export { store, persistor };
