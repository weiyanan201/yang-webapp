import { USER_TYPE } from './constants';

export const menus=[
    {
        "id": 5,
        "pid": -1,
        "icon": "user",
        "name": "表管理",
        "route": "",
        "bread": "",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }, {
        "id": 6,
        "pid": 5,
        "icon": "idcard",
        "name": "表信息",
        "route": "/table/groups",
        "bread": "group列表",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }, {
        "id": 7,
        "pid": 5,
        "icon": "user-add",
        "name": "新建表",
        "route": "/table/addTable",
        "bread": "新建表",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }
];
