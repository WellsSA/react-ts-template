/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
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
  const rootReducer = (state, action) => {
    if (action.type === 'AUTHENTICATION_LOGOUT_REQUEST') {
      state = undefined;
    }
    // @ts-ignore
    return reducers(state, action);
  };
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);

  return store;
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;
