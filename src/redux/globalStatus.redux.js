/**
 * 全局状态
 * @type {{}}
 */

import { fromJS, List } from 'immutable';

const defaultState = fromJS({
    breadPath:{}
});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}
