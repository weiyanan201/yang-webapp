import {fromJS} from 'immutable';
import { axios } from '../util';
import util from "../util/util";

const defaultState = fromJS({
    userName: '123',
    role: '',
    loginStatus: false,
    validMsg:''
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CHECK_LOGIN = "CHECK_LOGIN";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            const data = action.payload;
            const msg = data.data.msg;
            let status = false;
            if (util.isEmpty(msg)){
                status = true;
            }
            return state.merge({
                loginStatus: status,
                validMsg: msg
            });
        case LOGOUT:
            return state.set("loginStatus", false);
        case CHECK_LOGIN:
            return state.set("loginStatus", action.result.data);
        default:
            return state;
    }
}

export const actions = {
    login: (userName,password) => {
        return (dispatch) => {
            axios.post("/login",{userName:userName,password:password})
                .then(res => {
                    dispatch({type: LOGIN, payload:res.data})
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


