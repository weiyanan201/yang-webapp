import * as constants from './constant';
import axios from 'axios';

export const login = () =>{
    return dispatch => {
        console.log("login");
        axios.get("/login")
            .then(res=>{
                console.log(res.data);
                dispatch({type:constants.LOGIN,result:res.data});
            })
    }
};

export const logout = () => {
    return {
        type: constants.LOGOUT
    }
}