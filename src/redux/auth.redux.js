import {fromJS} from 'immutable';
import axios from 'axios';

const defaultState = fromJS({
    userName: '123',
    role: '',
    hasLogin: true
});

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN :
            return state.set("hasLogin", true);
        case LOGOUT:
            return state.set("hasLogin", false);
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
    })
};


