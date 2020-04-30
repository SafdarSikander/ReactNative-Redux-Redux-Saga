import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';
import Reactotron from '../ReactotronConfig.';

export default () => {
  const middleware = [];
  const enhancers = [];
  /* ------------- Saga Middleware ------------- */
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  const reactortonEnhancer = Reactotron.createEnhancer();

  middleware.push(sagaMiddleware);
  enhancers.push(reactortonEnhancer);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(reducers, compose(...enhancers));
  // then run the saga
  sagaMiddleware.run(sagas);
  return store;
};
