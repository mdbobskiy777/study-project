import {applyMiddleware, compose, createStore} from 'redux';
import employersReducer from "./ducks/index"
import createSagaMiddleware from 'redux-saga';
import {watchFetchEmployers} from "./ducks/employers";
import {watchFetchSubordinates} from "./ducks/subordinates";

const rootReducer = employersReducer;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = () => {

    const store = createStore(rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(watchFetchEmployers);
    sagaMiddleware.run(watchFetchSubordinates);

    return store;

}

export const appStore = createAppStore();

