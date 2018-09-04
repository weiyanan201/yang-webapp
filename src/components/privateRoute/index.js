import React from "react";
import { connect } from 'react-redux';
import { Route, Link, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.hasLogin ? (
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
        hasLogin: state.getIn(['auth','hasLogin'])
    }
);

export default connect(mapState,null)(PrivateRoute);