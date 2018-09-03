import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './common/layout'

import store from './store';

const RouterList = () => (

    <Provider store={store}>
        <HashRouter>
            <MainLayout />
        </HashRouter>
    </Provider>

);
export default RouterList
