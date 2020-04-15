/* eslint-disable */
'use strict';
const genEnv = require("../../config/utils.config")
const obj = {
    "development": "192.168.1.17",    //测试版
    "production": "http://www.api.cxzgxy.com",            //正式版
}

module.exports = {
    getEnv() {
        return obj[genEnv.default()]
    }
}
