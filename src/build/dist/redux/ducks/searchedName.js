"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchedName = exports.SET_SEARCHED_NAME = void 0;
exports.SET_SEARCHED_NAME = 'SET_SEARCHED_NAME';
var initialState = {
    searchedName: ''
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case exports.SET_SEARCHED_NAME:
            return __assign(__assign({}, state), { searchedName: action.searchedName });
        default: return state;
    }
};
var setSearchedName = function (searchedName) { return ({ type: exports.SET_SEARCHED_NAME, searchedName: searchedName }); };
exports.setSearchedName = setSearchedName;
exports.default = reducer;
//# sourceMappingURL=searchedName.js.map