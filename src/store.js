import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      logger,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(rootSaga);


export default store;
