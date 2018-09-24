import React  from 'react';
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './layout';
import store from './store';
import './style.js';

const App = () => (

    <Router>
        <Provider store={store}>
            <div>
                <Switch>
                    <Route path="/" component={MainLayout} />
                </Switch>
            </div>
        </Provider>
    </Router>
);


export default App;
