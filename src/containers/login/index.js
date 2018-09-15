import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Button, Form, Icon, Input, Checkbox} from 'antd';

import {actions} from '../../redux/auth.redux';

import style from './style.less';
import util from "../../util/util";

const FormItem = Form.Item;

class Login extends Component {

    handleSubmit = () => {
        console.log("submit");
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("userName : " , values.userName);
                console.log("password : " , values.password);
                this.props.login(values.userName,values.password);
                console.log("login done");
            }
        });
    };

    validateToNextPassword = (rule, value, callback) => {

        console.log(this.props.validMsg);

        callback();
    }

    render() {
        console.log("render");
        if (!this.props.loginStatus) {
            const {getFieldDecorator} = this.props.form;
            return (
                <div>
                    Login
                    <Form className={style["login-form"]}>
                        <FormItem

                        >
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'},
                                    {
                                        validator: this.validateToNextPassword,
                                    }],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                                
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} className={style["login-form-button"]}>
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            )
        } else {
            return <Redirect to='/'/>
        }
    }

}

const LoginForm = Form.create()(Login);

const mapState = (state) => ({
    loginStatus: state.getIn(['auth', 'loginStatus']),
    validMsg : state.getIn(['auth', 'validMsg'])
});

const mapDispatch = (dispatch) => ({
    login(userName,password) {
        dispatch(actions.login(userName, password));
        console.log("dispathc done ");
    },
});



export default connect(mapState, mapDispatch)(LoginForm);