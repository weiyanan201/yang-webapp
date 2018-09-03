
import { fromJS } from 'immutable';


const defaultState = {
    role:'',
    userName:'',
};

export default (state=defaultState,action)=> {
    switch (action.type){

        default:
            return state;
    }
}