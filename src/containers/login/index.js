import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Button, Form, Icon, Input} from 'antd';

import {actions} from '../../redux/auth.redux';
import style from './style.less';
import axios from '../../util/axios'

const FormItem = Form.Item;

@connect(
    state => state.toObject('auth'),
    {}
)
class Login extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.props.auth.get('loginStatus'));

    }

    handleSubmit = () => {
        const _form = this.props.form;
        _form.validateFields((err, values) => {
            if (!err) {
                const res = axios.post("/login",{userName:values.userName,password:values.password});
                res.then(res=>{
                    const data = res.data.data;
                    if (data.hasOwnProperty('token')){
                        this.props.loginSuccess();
                    } else{
                        //提醒错误信息
                        _form.setFields({
                            password: {
                                value: values.password,
                                errors: [new Error(data.msg)],
                            },
                        });
                    }
                })
            }
        });
    };

    render() {
        if (!this.props.loginStatus) {
            const {getFieldDecorator} = this.props.form;
            return (
                <div>
                    Login
                    <Form className={style["login-form"]}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: '请输入用户名'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],

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

export default LoginForm

const mapState = (state) => ({
    loginStatus: state.getIn(['auth', 'loginStatus']),
});

const mapDispatch = (dispatch) => ({
    loginSuccess() {
        dispatch(actions.loginSuccess())
    },
});



// export default connect(mapState, mapDispatch)(LoginForm);
