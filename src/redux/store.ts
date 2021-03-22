import { applyMiddleware, compose, createStore } from "redux";
import employersReducer from "./ducks";
import createSagaMiddleware from "redux-saga";
import { watchFetchEmployers } from "./ducks/employers";
import { watchFetchSubordinates } from "./ducks/subordinates";


type ReducerType = typeof rootReducer;
export type AppStoreType = ReturnType<ReducerType>;

const rootReducer = employersReducer;

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = () => {

    const store = createStore(rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(watchFetchEmployers);
    sagaMiddleware.run(watchFetchSubordinates);

    return store;

};

export const appStore = createAppStore();

