import React , { Component } from 'react';
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './layout';
import Login from './containers/login';
import PrivateRoute from './components/privateRoute';
import CheckLogin from './components/checkLogin';
import store from './store';

const App = () => (

    <Router>
        <Provider store={store}>
            <div>
                <CheckLogin />
                <Switch>

                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/" component={MainLayout} />
                </Switch>
            </div>
        </Provider>
    </Router>
);

class NoMatch extends Component{
    render(){
        return (
            <div>NoMatch</div>
        );
    }
}

class Home extends Component{
    render(){
        return (
            <div>Home</div>
        );
    }
}

class About extends Component{
    render(){
        return (
            <div>About</div>
        );
    }
}

class User extends Component{

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div>User</div>
        );
    }
}

export default App;
