import React from "react";
import { connect } from 'react-redux';
import { Route, Link, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.loginStatus ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const mapState = (state) => (
    {
        loginStatus: state.getIn(['auth','loginStatus'])
    }
);

export default connect(mapState,null)(PrivateRoute);