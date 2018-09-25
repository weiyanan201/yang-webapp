import { fromJS, Map } from 'immutable';
import { tagAll } from '../config'
import { axios } from '../util';

const defaultState = new Map({
    tags: new Map({
        courseValue: tagAll.key,
        sceneValue: tagAll.key,
        themeValue: tagAll.key,
        ageValue: tagAll.key,
        subjectValue: tagAll.key,
    }),
})

const TAG_CHANGE = 'TAG_CHANGE'

export default (state = defaultState, action) => {
    switch (action.type) {
        case TAG_CHANGE:
            const data = action.payload;
            return state.set("tags",state.get("tags").set(data.tag,data.value))
        default:
            return state;
    }
}


const actions = {
    changeTag : (tag,value)=>{
        console.log(tag,value);
        return {
            type: TAG_CHANGE,
            payload:{tag,value}
        }
    }
};

export { actions }
