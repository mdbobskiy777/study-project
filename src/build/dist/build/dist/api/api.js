'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.EmployersAPI = void 0;
var axios_1 = require('axios');
var instance = axios_1.default.create({
    baseURL: 'http://api.additivasia.io/api/v1/assignment/employees/'
});
exports.EmployersAPI = {
    getEmployers: function () {
        return instance.get('').then(function (response) { return response.data; });
    },
    getSubordinates: function (name) {
        return instance.get(name + '/').then(function (response) { return response.data; });
    }
};
//# sourceMappingURL=api.ts.map
