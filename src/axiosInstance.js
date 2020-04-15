import axios from "axios";
// import { router } from "./router";

// 设置默认访问地址
// var baseURL = "http://wanli268.site";
// axios.defaults.baseURL = "http://wanli268.site";
// var baseURL = "http://localhost:3000";
// var baseURL = require("./utils").getEnv()
// console.log("baseURL", baseURL)
const genEnv = require('../config/utils.config')
// 设置默认访问地址
// eslint-disable-next-line no-undef
const baseURL = genEnv.default() === 'production'
    ? 'http://www.api.cxzgxy.com'
    : '192.168.1.17'
export default function fetch(options) {
    // options.baseURL = baseURL
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            // 所有请求都会带上这些配置
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 30 * 1000, // 30s 超时
            baseURL: baseURL
        });

        // 发起请求时,会执行该方法
        instance.interceptors.request.use(options => {
            //...

            let token = localStorage.getItem('token');
            // console.log(token)
            // console.log(options)
            // 如果存在则设置请求头
            if (token) {
                options.headers.authorization = `${token}`;
            }
            return options
        }, err => {
            return reject(err)
        })

        //接收到后台的数据时执行的方法
        instance.interceptors.response.use(response => {
            if(response.data.data && response.data.data.hasOwnProperty("token") && response.data.data.token != ""){
                localStorage.setItem("token", response.data.data.token)
            }
            return response;
        }, err => resolve(err.response))


        instance(options)
            .then(response => { // 成功请求
                resolve(response)
            })
            .catch(error => { // 失败请求
                console.error('请求异常：' + error)
                reject(error)
            })
    })
}
function toParams(obj) {
    var param = ''
    for (const name in obj) {
        if (typeof obj[name] !== 'function') {
            param += '&' + name + '=' + encodeURI(obj[name])
        }
    }
    return '?' + param.substring(1)
}
export function get(path, params) {
    // console.log('get 请求 参数地址',path,params)
    const options = {
        method: 'GET',
        url: path + toParams(params)
    }
    return fetch(options)
}

export function post(path, params) {
    // console.log('post 请求 参数地址',path,params)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: params,
        // body: JSON.stringify(params),
        url:  path
    }
    return fetch(options)
}
