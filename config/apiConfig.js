let config = require('~/config')
let url = config.apiURL

if (typeof window === 'undefined') {
    url = config.backApiURL
}

const api = {
    getUserInfo: { // 获取当前登录用户信息
        url: url + '/user/info',
        method: 'GET'
    }
}

module.exports = api
