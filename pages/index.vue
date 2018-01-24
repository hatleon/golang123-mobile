<template>
    <div>
        <app-header></app-header>
        <ul class="category-nav">
            <li><a :class="{'category-select': !cate}" href="/">全部</a></li>
            <li :id="c.id" v-for="c in categories"><a :class="{'category-select': c.id == cate}" :href="'/?cate=' + c.id">{{c.name}}</a></li>
        </ul>
        <div class="container">
            <ul>
                <li v-for="article in articles" class="article-item">
                    <h3 class="article-title">{{article.name | entity2HTML}}</h3>
                    <div class="article-property-box">
                        <span class="article-category article-property">{{article.categories[0].name}}</span>
                        <span class="article-property">{{article.user.name}}</span>
                        <span  class="article-property">回复&nbsp;{{article.commentCount}}</span>
                        <span  class="article-property">{{article.createdAt | getReplyTime}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import request from '~/net/request'
    import Header from '~/components/Header'
    import dateTool from '~/utils/date'
    import htmlUtil from '~/utils/html'

    export default {
        middleware: 'userInfo',
        data () {
            return {

            }
        },
        asyncData (context) {
            const query = context.query || {}
            return Promise.all([
                request.getCategories({
                    client: context.req
                }),
                request.getArticles({
                    client: context.req,
                    query: {
                        cateId: query.cate || '',
                        pageNo: query.pageNo || 1,
                        noContent: 'true'
                    }
                }),
                request.getTop10({
                    client: context.req
                }),
                request.getMaxComment({
                    client: context.req
                }),
                request.getMaxBrowse({
                    client: context.req
                }),
                request.getTopList({
                    client: context.req
                })
            ]).then(data => {
                let categories = data[0].data.categories || []
                let articles = data[1].data.articles || []
                let pageNo = data[1].data.pageNo
                let totalCount = data[1].data.totalCount
                let pageSize = data[1].data.pageSize
                let top10Users = data[2].data.users
                let user = context.user
                let cate = query.cate || ''
                let maxComment = data[3].data.articles || []
                let maxBrowse = data[4].data.articles || []
                let topList = (data[5] && data[5].data.articles) || []
                articles.map(items => {
                    items.isTop = false
                })
                if (!query.pageNo || parseInt(query.pageNo) < 2) {
                    topList.map(items => {
                        items.isTop = true
                    })
                    articles = topList.concat(articles)
                }

                return {
                    totalVisible: process.env.NODE_ENV !== 'production',
                    categories: categories,
                    articles: articles,
                    totalCount: totalCount,
                    pageNo: pageNo,
                    pageSize: pageSize,
                    top10Users: top10Users,
                    user: user,
                    cate: cate,
                    maxComment: maxComment,
                    maxBrowse: maxBrowse
                }
            }).catch(err => {
                console.log(err.message)
                context.error({ message: 'Not Found', statusCode: 404 })
            })
        },
        head () {
            return {
                title: '首页'
            }
        },
        filters: {
            getReplyTime: dateTool.getReplyTime,
            entity2HTML: htmlUtil.entity2HTML
        },
        components: {
            'app-header': Header
        }
    }
</script>

<style>
    @import '../assets/styles/home.css'
</style>
