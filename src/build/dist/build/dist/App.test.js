"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var App_1 = require("./App");
test('renders learn react link', function () {
    react_1.render(React.createElement(App_1.default, null));
    var linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.tsx.map
