import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/auth.redux';

class CheckLogin extends Component{

    componentDidMount(){
        console.log("CheckLogin.componentDidMount");
        this.props.checkLogin();
    }

    render(){
        return (
            null
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        checkLogin(){
            dispatch(actions.checkLogin());
        }
    }
}

export default  connect(null,mapDispatch)(CheckLogin);