let config = require('~/config')
let url = config.apiURL

if (typeof window === 'undefined') {
    url = config.backApiURL
}

const api = {
    getCategories: { // 获取分类列表
        url: url + '/categories',
        method: 'GET'
    },
    getArticles: { // 获取文章列表
        url: url + '/articles',
        method: 'GET'
    },
    getArticle: { // 获取文章信息
        url: url + '/articles/info/:id',
        method: 'GET'
    },
    getTop10: { // 获取积分排名前10的用户
        url: url + '/user/score/top10',
        method: 'GET'
    },
    getTop100: { // 获取积分排名前100的用户
        url: url + '/user/score/top100',
        method: 'GET'
    },
    getMaxComment: { // 回复最多的话题
        url: url + '/articles/max/bycomment',
        method: 'GET'
    },
    getMaxBrowse: { // 浏览最多的话题
        url: url + '/articles/max/bybrowse',
        method: 'GET'
    },
    getTopList: { // 获取置顶文章列表
        url: url + '/articles/top/global',
        method: 'GET'
    },
    getUserInfo: { // 获取当前登录用户信息
        url: url + '/user/info',
        method: 'GET'
    }
}

module.exports = api
