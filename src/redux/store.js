import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import employersReducer, {watchFetchEmployers, watchFetchSubordinates} from "./employersReducer"
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({
    employersReducer: employersReducer
})
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = () => {
    const store = createStore(rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(watchFetchEmployers)
    sagaMiddleware.run(watchFetchSubordinates)
    return store
}


export const appStore = createAppStore();

