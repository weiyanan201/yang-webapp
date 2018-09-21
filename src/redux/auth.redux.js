import {fromJS} from 'immutable';
import { axios } from '../util';
import util from "../util/util";

const defaultState = fromJS({
    userName: '',
    role: '',
    loginStatus: false
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CHECK_LOGIN = "CHECK_LOGIN";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            return state.set("loginStatus",true);
        case LOGOUT:
            return state.set("loginStatus", false);
        case CHECK_LOGIN:
            console.log("change");
            return state.set("loginStatus", action.payload);
        default:
            return state;
    }
}

export const actions = {
    loginSuccess: () => ({
        type: LOGIN
    }),
    logout: () => ({
        type: LOGOUT
    }),
    checkLogin: (loginStatus)=>({
        type: CHECK_LOGIN,
        payload: loginStatus
    })
};


