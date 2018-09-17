import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/auth.redux';


import axios from '../../util/axios';

// class CheckLogin extends Component{
//
//     componentDidMount(){
//         console.log("CheckLogin.componentDidMount");
//         this.props.checkLogin();
//     }
//
//     render(){
//         return (
//             null
//         );
//     }
// }
//
// const mapDispatch = (dispatch) => {
//     return {
//         checkLogin(){
//             dispatch(actions.checkLogin());
//         }
//     }
// }
//
// export default  connect(null,mapDispatch)(CheckLogin);


//把需要登录状态验证的Component传入到这个高阶函数中
export  function requireAuthentication(Component) {
    class AuthenticatedComponent extends Component {

        isSignIn = false;

        constructor(props){
            super(props);
            console.log("constructor");
        }

        componentWillMount(){
            console.log("componentWillMount");
        }

        componentDidMount(){
            console.log("componentDidMount");
        }

        componentWillReceiveProps(){
            console.log("componentWillReceiveProps");
        }

        shouldComponentUpdate(){
            console.log("shouldComponentUpdate");
            return true;
        }

        componentWillUpdata(){
            console.log("componentWillUpdata");
        }

        componentDidUpdate(){
            console.log("componentDidUpdate");
        }

        
        render() {
            console.log('render');
            return (
                <div>

                    {this.state.isSignIn
                        ? <Component  {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }
    return AuthenticatedComponent;
}


