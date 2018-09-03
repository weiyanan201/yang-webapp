import { combineReducers } from 'redux';

import { reducer as layoutReducer } from '../common/layout/store';

const reducer = combineReducers({
    layout: layoutReducer,
});

export default reducer;