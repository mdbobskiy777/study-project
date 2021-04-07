import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { appStore } from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';

import App from './App';

test('render app', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <App/>
            </Provider>
        </BrowserRouter>);

    const linkElement = screen.getByText(/Enter the employee name/i);

    expect(linkElement).toBeInTheDocument();
});
