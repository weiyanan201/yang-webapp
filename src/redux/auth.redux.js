import {fromJS} from 'immutable';
import { axios } from '../util';

const defaultState = fromJS({
    userName: '123',
    role: '',
    loginStatus: false
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CHECK_LOGIN = "CHECK_LOGIN";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            return state.set("loginStatus", true);
        case LOGOUT:
            return state.set("loginStatus", false);
        case CHECK_LOGIN:
            return state.set("loginStatus", action.result.data);
        default:
            return state;
    }
}

export const actions = {
    login: () => {
        return (dispatch) => {
            axios.get("/login",{userName:'wei',password:'123'})
                .then(res => {
                    console.log(res);
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
                    dispatch({type: CHECK_LOGIN, result: res.data})
                })
        }
    }
};


