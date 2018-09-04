import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';

import  { actions }  from '../../redux/auth.redux';

const Login = (props) => {

    console.log("login");
    if (!props.hasLogin){
        return (
            <div>
                Login
                <Button onClick={props.login}>登录</Button>
            </div>
        )
    } else{
        return <Redirect to='/'/>
    }

};

const mapState = (state) => ({
    hasLogin: state.getIn(['auth','hasLogin'])
});

const mapDispatch = (dispatch) => ({
    login(){
        let user = sessionStorage.getItem("userName");
        console.log("session user: " ,user);
        dispatch(actions.login());
    },
});

export default connect(mapState,mapDispatch)(Login);