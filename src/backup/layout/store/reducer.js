
import { fromJS } from 'immutable';
import * as constants  from './constant';

const defaultState = {
    role:'ADMIN',
    userName:'',
    login:false
};

export default (state=defaultState,action)=> {
    switch (action.type){
        case constants.LOGIN:
            return {...state,userName:'123',login:true};
        case constants.LOGOUT:
            return {...state,userName:''};
        default:
            return state;
    }
}