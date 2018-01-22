var config = {
    apiURL: '/api',
    backApiURL: 'http://127.0.0.1:8023/api',
    useProxy: false,
    tokenCookieName: 'token',
    tokenMaxAge: 86400, // token多久过期，单位秒
    bdStatEnable: true,
    bdStatSI: '253a8e53710b29ed40e6e57965279933',
    messageDuration: 5,
    luosimaoSiteKey: 'e4c904f60b8085661d28fe1c0129d16f',
    proxy: {
        host: '127.0.0.1',
        port: 8881
    }
}

module.exports = config
