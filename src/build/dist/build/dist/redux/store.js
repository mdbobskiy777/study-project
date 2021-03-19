"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appStore = void 0;
var redux_1 = require("redux");
var index_1 = require("./ducks/index");
var redux_saga_1 = require("redux-saga");
var employers_1 = require("./ducks/employers");
var subordinates_1 = require("./ducks/subordinates");
var rootReducer = index_1.default;
var sagaMiddleware = redux_saga_1.default();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var createAppStore = function () {
    var store = redux_1.createStore(rootReducer, composeEnhancers(redux_1.applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(employers_1.watchFetchEmployers);
    sagaMiddleware.run(subordinates_1.watchFetchSubordinates);
    return store;
};
exports.appStore = createAppStore();
//# sourceMappingURL=store.ts.map
