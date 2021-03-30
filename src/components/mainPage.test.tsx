import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { cleanup, fireEvent, render } from '@testing-library/react';

import MainPage from './MainPage';
import { appStore } from '../redux/store';

afterEach(cleanup);

it('renders MainPage without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={appStore}>
                <MainPage />
            </Provider>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('MainPage input onChange value is correct', () => {
    const utils = render(
        <BrowserRouter>
            <Provider store={appStore}>
                <MainPage />
            </Provider>
        </BrowserRouter>
    );

    const input = utils.getByRole('textbox');
                                    
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
