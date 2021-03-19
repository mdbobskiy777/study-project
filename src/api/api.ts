import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.additivasia.io/api/v1/assignment/employees/'
});

export const EmployersAPI = {
    getEmployers() {
        return instance.get(``).then(response => response.data);
    },

    getSubordinates(name:string) {
        return instance.get(`${name}/`).then(response => response.data);
    }
}
