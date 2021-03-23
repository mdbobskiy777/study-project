import mockAxios from 'axios';
import { cleanup } from '@testing-library/react';
import {EmployersAPI} from './api';

afterEach(cleanup);

it('fetch data', async () => {
    const data = [
        'John Hartman',
        'Samad Pitt',
        'Amaya Knight',
        'Leanna Hogg',
        'Aila Hodgson',
        'Vincent Todd',
        'Faye Oneill',
        'Lynn Haigh',
        'Nylah Riddle'
    ];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: data }),
    );

    const employers =  await EmployersAPI.getEmployers();

    expect(employers).toEqual(data);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('');
});
