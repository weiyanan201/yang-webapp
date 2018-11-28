import { Modal } from 'antd';
import axios from 'axios';
import qs from 'qs';

import host from '../../config/host';
import util from '../util';

const baseUrl = host;

axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config
});

// axios.interceptors.request.use(function (config) {
//     console.log("axios.interceptors.request.use");
// });

/**
 * @param options
 * @returns {Promise<any>}
 */

function packPromise(options){
    return new Promise((resolve, reject) => {
        axios({...options}).then((response) => {
            if (response.status === 200) {
                let data = response.data;
                if (data.returnCode === 0) {
                    resolve(response);
                } else {
                    Modal.error({
                        title: "错误提示",
                        content: data.returnMessage
                    });
                    reject(response);
                }
            } else {
                //TODO 其他status处理
                reject(response);
            }
        }).catch((error) => {
            console.error(error);
            const response = error.response;
            if (response && response.status===401){
                const location = response.headers['location'];
                if (location){
                    window.location = location;
                }
            }else{

                let errorMsg = "系统异常，请联系管理员";
                if (!util.isEmpty(response.data.returnMessage)){
                    errorMsg =  response.data.returnMessage;
                }
                Modal.error({
                    title: "错误提示",
                    content: errorMsg
                });

            }
            reject(error);
        })
    });
}

const Axios = {

    //下载
    downloadByPost(url,params={}){
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url:baseUrl+url,
                data: qs.stringify(params),
                responseType: 'blob'
            }).then(response => {
                if (!response) {
                    return
                }
                let fileName = response.headers.filename;
                if (util.isEmpty(fileName)){
                    return ;
                }
                console.log(response);
                let url = window.URL.createObjectURL(new Blob([response.data]));
                let link = document.createElement('a');
                link.style.display = 'none';
                link.href = url;
                link.setAttribute('download',fileName);

                document.body.appendChild(link);
                link.click();
                resolve(response);
            }).catch(err => {
                var read=new FileReader(); //创建读取器对象FileReader
                read.readAsText(err.response.data);//开始读取文件
                let ret = "";
                read.onload=function () {//数据读完会触发onload事件
                    ret=read.result;//read有个result属性存放这结果，从result获取到数据
                    let json  = JSON.parse(ret);
                    let errorMsg = "系统异常，请联系管理员";
                    if (!util.isEmpty(json.returnMessage)){
                        errorMsg =  json.returnMessage;
                    }
                    Modal.error({
                        title: "错误提示",
                        content: errorMsg
                    });
                };
            })
        })
    },

    get(url,params={}) {
        let options = {
            url:baseUrl+url,
            method:'get',
            params:{...params}
        };
        return packPromise(options);
    },
    post(url,data={}){
        let options = {
            url:baseUrl+url,
            method:'post',
            data:qs.stringify(data),
        };
        return packPromise(options);
    },
    postByJson(url,data={}){
        let header = {'Content-Type': 'application/json;charset=utf-8'};
        let options = {
            url:baseUrl+url,
            method:'post',
            data:data,
            headers:header
        };
        return packPromise(options);
    },
    //上传
    postByMultipart(url,data){
        let header = {'Content-Type':'multipart/form-data'};
        console.log(data);
        let options = {
            url:baseUrl+url,
            method:'post',
            data:data,
            headers:header
        };
        return packPromise(options);
    }
};

export default Axios ;



