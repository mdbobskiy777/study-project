import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import { act as domAct } from 'react-dom/test-utils';

import { appStore } from '../redux/store';
import OverviewPage from './OverviewPage';

it('OverviewPage list showing preloader', () => {
    const utils = render(
        <BrowserRouter>
            <Provider store={appStore}>
                <OverviewPage />
            </Provider>
        </BrowserRouter>
    );

    const preloader = utils.getByRole('img');

    expect(preloader);
});

describe('overviewPage render', () => {
    let container: HTMLElement;

    it('should render empty page and then page with preloader', async ()  =>  {
        await domAct(async () => {
            const result = render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <OverviewPage />
                    </Provider>
                </BrowserRouter>);

            container = result.container;

            expect(container.innerHTML).toMatchSnapshot();
        });

        expect(container.innerHTML).toMatchSnapshot();
    });
});
