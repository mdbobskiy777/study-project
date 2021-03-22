'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var employers_1 = require('./employers');
var searchedName_1 = require('./searchedName');
var subordinates_1 = require('./subordinates');
var redux_1 = require('redux');
exports.default = redux_1.combineReducers({
    employers: employers_1.default,
    searchedName: searchedName_1.default,
    subordinates: subordinates_1.default
});
//# sourceMappingURL=index.ts.map
