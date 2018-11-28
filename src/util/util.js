import React from 'react';

import { USER_TYPE } from '../config';

export default {

    isEmpty(param){
        if (param===undefined || param===null || (param+"").trim()==='' ){
            return true;
        }else{
            return false;
        }
    },

    formatDate(ts){
        if (this.isEmpty(ts)){
            return "";
        }
        let date = new Date(ts);
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        let hour = "0"+date.getHours();
        let min = "0"+date.getMinutes();
        let ss = "0"+date.getSeconds();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length)+" "+hour.substring(hour.length-2,hour.length)+":"+min.substring(min.length-2,min.length)+":"+ss.substring(ss.length-2,ss.length);
    },

    isAdmin(role){
        return role === USER_TYPE.ADMIN;
    }

}
