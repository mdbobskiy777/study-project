import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import MainPage from './MainPage';
import { appStore } from '../redux/store';

it('MainPage input onChange value is correct', () => {
    const utils = render(
        <BrowserRouter>
            <Provider store={appStore}>
                <MainPage />
            </Provider>
        </BrowserRouter>
    );

    const input = utils.getByRole('textbox') as HTMLInputElement;
                                    
    fireEvent.change(input,{ target: { value: 'S'} });

    expect(input.value).toBe('S');
});

it('MainPage Search button click with error showing', () => {
    const utils = render(
        <BrowserRouter>
            <Provider store={appStore}>
                <MainPage />
            </Provider>
        </BrowserRouter>
    );

    const input = utils.getByRole('textbox');
    const button = utils.getByRole('button');

    fireEvent.change(input,{ target: { value: 'S'} });

    fireEvent.click(button);

    expect(utils.getByText(/Wrong employer name/i).textContent)
        .toBe('Wrong employer name! Please enter correct name');
});
