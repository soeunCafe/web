import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { cafeSlice } from "./cafe";
import rootSaga from "./rootSaga";

const rootReduser = combineReducers({
  cafe: cafeSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReduser,
    devTools: true,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;
