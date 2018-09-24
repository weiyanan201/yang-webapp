import { combineReducers } from 'redux-immutable';
import { reducer as reduxFormReducer } from 'redux-form/immutable'

import authReducer from  '../redux/auth.redux';
import globalSatusReducer from '../redux/globalStatus.redux';


export default combineReducers({
    auth: authReducer,
    globalStatus:globalSatusReducer,
    form: reduxFormReducer,
})
