import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App';
import {appStore} from "./redux/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
