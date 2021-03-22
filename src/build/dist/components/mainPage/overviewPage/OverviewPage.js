'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
require('bootstrap/dist/css/bootstrap.min.css');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
var subordinates_1 = require('../../../redux/ducks/subordinates');
var OverviewPageStyled_1 = require('../../../styled/mainPage/overviewPage/OverviewPageStyled');
var react_bootstrap_1 = require('react-bootstrap');
var OverviewPage = function () {
    // @ts-ignore
    var employerDataSelector = react_redux_1.useSelector(function (state) { return state.subordinates.employerData; });
    var dispatch = react_redux_1.useDispatch();
    var paramsName = react_router_1.useParams();
    // @ts-ignore
    react_1.useEffect(function () {
        // @ts-ignore
        if (paramsName.name)
            dispatch(subordinates_1.fetchSubordinates(paramsName.name));
    }, 
    // @ts-ignore
    [paramsName.name]);
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement(OverviewPageStyled_1.default.MainContainer, null,
            react_1.default.createElement(react_bootstrap_1.Row, { xl: '12', lg: '10', md: '8', sm: '8', xs: '6' },
                react_1.default.createElement(react_bootstrap_1.Col, { xl: '12', lg: '12', md: '12', sm: '12', xs: '12' },
                    react_1.default.createElement(OverviewPageStyled_1.default.MyTittle, null, paramsName.name),
                    react_1.default.createElement(OverviewPageStyled_1.default.MyDiv, null, 'Direct subordinates: ' + employerDataSelector[0]))),
            react_1.default.createElement(react_bootstrap_1.Row, { xl: '12', lg: '10', md: '8', sm: '8', xs: '6' },
                react_1.default.createElement(react_bootstrap_1.Col, { xl: '12', lg: '12', md: '12', sm: '12', xs: '12' },
                    react_1.default.createElement(OverviewPageStyled_1.default.MyUL, null, (employerDataSelector[1]) ? employerDataSelector[1]['direct-subordinates'].map(function (subordinate, index) {
                        return react_1.default.createElement(OverviewPageStyled_1.default.MyLI, { key: subordinate }, index);
                    }) :
                        react_1.default.createElement('div', null, 'Haven`t subordinates')))))));
};
exports.default = OverviewPage;
//# sourceMappingURL=OverviewPage.js.map
