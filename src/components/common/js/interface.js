import { get, post } from '../../../axiosInstance'
const Utils = require('../../../utils/index.js')
var wapi = {
    // 发送验证码
    getcheck(params) {
        return post(`${Utils.getEnv()}/index.php/index/Register/VerificationCode`, params)
    },
    // 注册账号
    postregister(params) {
        return post(`${Utils.getEnv()}/index.php/index/Register/register`, params)
    },
    // 手机号登录
    postlogin(params) {
        return post(`${Utils.getEnv()}/index.php/index/login/login`, params)
    },
    // 获取虚拟数据加载更多
    jiazaitwo(params){
        return get('http://localhost:8081/static/mock.json', params)
    }
}
module.exports = wapi
