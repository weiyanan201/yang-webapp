import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import MainLayout from './common/layout'
import reducers from './reducers';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

const RouterList = () => (

    <Provider store={store}>
        <HashRouter>
            <MainLayout/>
        </HashRouter>
    </Provider>

);
export default RouterList
