import { fromJS, List } from 'immutable';
import { axios } from '../util';
import { menus as configMenus } from '../config'

const defaultState = fromJS({
    userName: '',
    role: '',
    menus:new List(),
    loginSatus: true
});

// const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USERINFO = "GET_USERINFO";

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERINFO:
            const data = action.payload.data;
            const role = data.role;
            const userName = data.userName;
            const menusData = configMenus.filter(item=>{
                return item.roles.includes(role);
            });
            const menus = new List(_arrayToTree(menusData));
            return state.merge({
                userName,role,menus
            })
        default:
            return state;
    }
}

function _arrayToTree(menus){

    //antd 的组件只识别字符串
    menus.map(v=>{
        v.id=v.id+"";
        v.pid = v.pid+"";
    })
    menus.sort((a,b)=>(a.id-b.id));
    let data = List(menus);
    let result = [];
    let hash = {};
    data.forEach((item,index)=>{
        // hash[data[index]['id']] = data[index];
        hash[item.id] = item;
    })
    data.forEach(item=>{
        let hasParent = hash[item['pid']];
        if(hasParent){
            if(!hasParent['children']){
                hasParent['children']=[];
            }
            hasParent['children'].push(item);
        }else{
            result.push(item);
        }
    })
    return result;

}

const actions = {
    logout: () => ({
        type: LOGOUT
    }),
    getUserInfo:()=>{
        return dispatch=>{
            axios.get("/api/getUserInfo")
                .then(res=>{
                    dispatch({
                        type:GET_USERINFO,
                        payload: res.data
                    })

                })
        }
    }
};

export { actions }
