import React from "react";
import { connect } from 'react-redux';
import { Route, Link, Redirect } from "react-router-dom";
import { actions } from "../../redux/auth.redux";

class PrivateRoute extends React.Component{

    constructor(props){
        super(props);
        console.log("PrivateRoute.constructor",this.props);
        this.props.hasLogin();
    }

    componentDidMount(){

    }

    render(){

        if (this.props.loginStatus) {
            return <Route {...this.props} render={<React.Component {...this.props}/>}/>
        }else{
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}
            />;
        }

    }
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//
//     return (<Route
//         {...rest}
//         render={props =>
//             rest.hasLogin ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: "/login",
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// )};

const mapState = (state) => (
    {
        loginStatus: state.getIn(['auth','hasLogin'])
    }
);

const mapDispatch = (dispatch) => ({
    hasLogin(){
        dispatch(actions.hasLogin());
    }
});

export default connect(mapState,mapDispatch)(PrivateRoute);
