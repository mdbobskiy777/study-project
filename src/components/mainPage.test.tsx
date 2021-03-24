import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appStore } from '../redux/store';
import {fireEvent, getByRole, getByTestId, render, screen} from '@testing-library/react';

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fireEvent.change(input,{target:{value:'S'}});

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(input.value).toBe('S');
});
