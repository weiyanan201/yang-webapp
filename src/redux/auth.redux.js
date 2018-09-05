import {fromJS} from 'immutable';
import axios from 'axios';

const defaultState = fromJS({
    userName: '123',
    role: '',
    loginStatus: false
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const HASLOGIN = "HASLOGIN";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            return state.set("loginStatus", true);
        case LOGOUT:
            return state.set("loginStatus", false);
        case HASLOGIN:
            return state.set("loginStatus", true);
        default:
            return state;
    }
}

export const actions = {
    login: () => {
        return (dispatch) => {
            axios.get("/login?userName=wei&password=123")
                .then(res => {
                    dispatch({type: LOGIN, result: true})
                })
        }

    },
    logout: () => ({
        type: LOGOUT
    }),
    checkLogin: ()=>{
        return dispatch => {
            axios.get("/checkLogin")
                .then(res => {
                    console.log(res.data);
                    dispatch({type: HASLOGIN, result: res.data})
                })
        }
    }
};


