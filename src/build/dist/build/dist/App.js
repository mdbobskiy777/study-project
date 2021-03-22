'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_router_1 = require('react-router');
var index_1 = require('../src/components/index');
var App = function () {
    return React.createElement(React.Fragment, null, React.createElement(react_router_1.Switch, null, React.createElement(react_router_1.Route, { exact: true, path: '/', render: function () { return React.createElement(index_1.default.MainPage, null); } }), React.createElement(react_router_1.Route, { exact: true, path: '/employers/:name?/', render: function () { return React.createElement(index_1.default.OverviewPage, null); } }), React.createElement(react_router_1.Route, { path: '*', render: function () { return React.createElement('div', null, '404 NOT FOUND'); } })));
};
exports.default = App;
//# sourceMappingURL=App.tsx.map
