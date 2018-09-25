import { combineReducers } from 'redux-immutable';

import authReducer from  '../redux/auth.redux';
import globalSatusReducer from '../redux/globalStatus.redux';
import planReducer from '../redux/plan.redux';

export default combineReducers({
    auth: authReducer,
    globalStatus:globalSatusReducer,
    plan: planReducer,
})
