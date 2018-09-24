import { USER_TYPE } from './constants';

export const menus=[
    {
        "id": 5,
        "pid": -1,
        "icon": "user",
        "name": "教案库",
        "route": "",
        "bread": "",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }, {
        "id": 6,
        "pid": 5,
        "icon": "idcard",
        "name": "教案列表",
        "route": "/plan/list",
        "bread": "教案库",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }, {
        "id": 7,
        "pid": 5,
        "icon": "user-add",
        "name": "教案管理",
        "route": "/plan/manager",
        "bread": "新建表",
        "roles":[USER_TYPE.ADMIN,USER_TYPE.USER]
    }
];
