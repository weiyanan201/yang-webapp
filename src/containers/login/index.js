import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';

import  { actions }  from '../../redux/auth.redux';

const Login = (props) => {
    if (!props.loginStatus){
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
    loginStatus: state.getIn(['auth','loginStatus'])
});

const mapDispatch = (dispatch) => ({
    login(){
        dispatch(actions.login());
    },
});

export default connect(mapState,mapDispatch)(Login);