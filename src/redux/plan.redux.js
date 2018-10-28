import { fromJS, Map,List } from 'immutable';
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
    searchValue:"",
    tableList:new List()
})

const TAG_CHANGE = 'TAG_CHANGE';
const SEARCH_VALUE_CHANGE = 'SEARCH_VALUE_CHANGE';
const SEARCH_QUERY = "SEARCH_QUERY";

export default (state = defaultState, action) => {
    switch (action.type) {
        case TAG_CHANGE:
            const data = action.payload;
            return state.set("tags",state.get("tags").set(data.tag,data.value))
        case SEARCH_VALUE_CHANGE:
            return state.set("searchValue",action.payload)
        case SEARCH_QUERY:
            return state.set("tableList",List(action.payload));
        default:
            return state;
    }
}


const actions = {
    changeTag : (tag,value,searchValue,tags)=>{

        // const newTages = {...tags,[tag]:value}
        // console.log(newTages);
        return dispatch => {
            axios.postByJson('/plan/searchQuery',{...tags,searchValue,[tag]:value})
                .then(res => {
                    dispatch ({
                        type: TAG_CHANGE,
                        payload:{tag,value}
                    });
                    dispatch({
                        type : SEARCH_QUERY,
                        payload : res.data.data
                    })
                })
        }


    },
    changeSearchValue:(value)=>{
        console.log("search value");
        return {
            type : SEARCH_VALUE_CHANGE,
            payload : value
        }
    },
    searchQuery:(searchValue,tags)=>{
        return dispatch => {
            axios.postByJson('/plan/searchQuery',{...tags,searchValue})
                .then(res => {
                    dispatch({
                        type : SEARCH_QUERY,
                        payload : res.data.data
                    })
                })
        }
    }
};

export { actions }
