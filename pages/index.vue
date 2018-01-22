<template>
    <div>
        <div>hello</div>
    </div>
</template>

<script>
    import request from '~/net/request'

    export default {
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
        middleware: 'userInfo'
    }
</script>

<style>
    @import '../assets/styles/home.css'
</style>
