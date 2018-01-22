<template>
    <div>
        <div>hello</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        asyncData (context) {
            return {}
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
