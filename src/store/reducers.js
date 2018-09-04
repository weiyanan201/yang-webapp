import { combineReducers } from 'redux-immutable';

import authReducer from  '../redux/auth.redux';


export default combineReducers({
    auth: authReducer,
})