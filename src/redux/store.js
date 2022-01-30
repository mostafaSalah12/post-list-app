import { createStore, applyMiddleware,compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas/rootSaga";

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(saga,logger),
      typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )
  saga.run(rootSaga)

export default store;

