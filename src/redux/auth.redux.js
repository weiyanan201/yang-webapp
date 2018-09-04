import {fromJS} from 'immutable';
import axios from 'axios';

const defaultState = fromJS({
    userName: '123',
    role: '',
    hasLogin: false
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const HASLOGIN = "HASLOGIN";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            return state.set("hasLogin", true);
        case LOGOUT:
            return state.set("hasLogin", false);
        case HASLOGIN:
            let hasLogin = false;
            console.log(action.result.returnCode);
            if (action.result.returnCode===0){
                hasLogin = true;
            }
            return state.set("hasLogin",hasLogin);
        default:
            return state;
    }
}

export const actions = {
    login: () => {
        return (dispatch) => {
            axios.get("/login")
                .then(res => {
                    console.log(res.data);
                    dispatch({type: LOGIN, result: res.data})
                })
        }

    },
    logout: () => ({
        type: LOGOUT
    }),
    hasLogin: ()=>{
        return dispatch => {
            axios.get("/hasLogin")
                .then(res => {
                    console.log(res.data);
                    dispatch({type: HASLOGIN, result: res.data})
                })
        }
    }
};


