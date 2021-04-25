import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./redux/reducer";
import watchChat from "./redux/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchChat);

export default store;
