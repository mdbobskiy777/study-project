import axios, { AxiosResponse } from 'axios';
import { Employers } from '../redux/ducks/employers';

const instance = axios.create({
    baseURL: 'http://api.additivasia.io/api/v1/assignment/employees/'
});

export const EmployersAPI = {
    getEmployers(): Promise<AxiosResponse<Employers>> {
        return instance.get('').then(response => response.data);
    },
    getSubordinates(name: string): Promise<AxiosResponse<Array<string>>> {
        return instance.get(`${name}/`).then(response => response.data);
    }
};
