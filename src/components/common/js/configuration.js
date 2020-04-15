const wapi = require("./interface.js")
console.log('wapiwapiwapiwapi',wapi)
var weixin  = {
    /**
     * 描述【获取验证码】
     * @param {string}  = [mobile] --手机号
     */
    checkErweima:function (mobile) {
        return new Promise((resolve, reject) => {
            wapi.getcheck({
                Mobile: mobile,
            })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    /**
     * 描述【手机号登录】
     * @param {string} mobile --手机号
     * @param {string} password --密码
     *
     * */
    getUserphone: function(mobile, password) {
        return new Promise((resolve, reject) => {
            wapi.postlogin({
                Mobile: mobile,
                Password: password
            })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    /**
     * 描述【注册账号】
     * @param {string} mobile --手机号
     * @param {string} password --密码
     * @param {string} code --验证码
     *
     * */
    userRegister:function (mobile, password, code) {
        return new Promise((resolve, reject) =>{
            wapi.postregister({
                Mobile: mobile,
                Password: password,
                Code:code
            })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    jiazai:function () {
        return new Promise((resolve, reject) => {
            wapi.jiazaitwo()
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}
export default weixin
