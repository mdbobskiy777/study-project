'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('bootstrap/dist/css/bootstrap.min.css');
var react_1 = require('react');
var react_redux_1 = require('react-redux');
var react_router_1 = require('react-router');
var react_bootstrap_1 = require('react-bootstrap');
var employers_1 = require('../../redux/ducks/employers');
var MainPageStyled_1 = require('../../../src/styled/mainPage/MainPageStyled');
var searchedName_1 = require('../../redux/ducks/searchedName');
var MainPage = function () {
    var employersSelector = react_redux_1.useSelector(function (state) { return state.employers.employers; });
    var searchedNameSelector = react_redux_1.useSelector(function (state) { return state.searchedName.searchedName; });
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(false), isValidName = _a[0], setValid = _a[1];
    var _b = react_1.useState(false), errorShowing = _b[0], setErrorShowing = _b[1];
    var history = react_router_1.useHistory();
    react_1.useEffect(function () {
        dispatch(employers_1.fetchEmployersList());
    }, []);
    var checkValidName = function () { return setValid(searchEmployer(searchedNameSelector)); };
    var searchEmployer = function (name) { return employersSelector.includes(name); };
    var OnSearchClickHandler = function () {
        checkValidName();
        if (isValidName) {
            history.push('/employers/' + searchedNameSelector);
        }
        else
            setErrorShowing(true);
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, null, react_1.default.createElement(MainPageStyled_1.default.MainContainer, null, react_1.default.createElement(react_bootstrap_1.Row, { xl: '12', lg: '10', md: '8', sm: '8', xs: '6' }, react_1.default.createElement(react_bootstrap_1.Col, { xl: '12', lg: '12', md: '12', sm: '12', xs: '12' }, react_1.default.createElement(MainPageStyled_1.default.MyTitle, null, 'Enter the employee name'), react_1.default.createElement(MainPageStyled_1.default.SearchFieldContainer, null, react_1.default.createElement(MainPageStyled_1.default.MyInput, { type: 'text', placeholder: 'Enter name here', onChange: function (e) {
        setErrorShowing(false);
        dispatch(searchedName_1.setSearchedName(e.target.value));
    } }), react_1.default.createElement(MainPageStyled_1.default.MyBtn, { onClick: function () { return OnSearchClickHandler(); } }, 'Search')), (errorShowing) && (react_1.default.createElement(MainPageStyled_1.default.MyErrorDiv, null, 'Wrong employer name! Please enter correct name')))), react_1.default.createElement(react_bootstrap_1.Row, { xl: '12', lg: '10', md: '8', sm: '8', xs: '6' }, react_1.default.createElement(react_bootstrap_1.Col, { xl: '12', lg: '12', md: '12', sm: '12', xs: '12' }, react_1.default.createElement(MainPageStyled_1.default.MyUL, null, employersSelector ?
        employersSelector.map(function (employee, index) {
            return react_1.default.createElement(MainPageStyled_1.default.MyLI, { key: index }, employee);
        }) : (react_1.default.createElement('div', null, 'Haven`t data to show'))))))));
};
exports.default = MainPage;
//# sourceMappingURL=MainPage.ts.map
