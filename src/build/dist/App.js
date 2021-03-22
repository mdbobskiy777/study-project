'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_router_1 = require('react-router');
var components_1 = require('./components');
var App = function () {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_1.Switch, null,
            react_1.default.createElement(react_router_1.Route, { exact: true, path: '/', render: function () { return react_1.default.createElement(components_1.default.MainPage, null); } }),
            react_1.default.createElement(react_router_1.Route, { exact: true, path: '/employers/:name?/', render: function () { return react_1.default.createElement(components_1.default.OverviewPage, null); } }),
            react_1.default.createElement(react_router_1.Route, { path: '*', render: function () { return react_1.default.createElement('div', null, '404 NOT FOUND'); } })));
};
exports.default = App;
//# sourceMappingURL=App.js.map
