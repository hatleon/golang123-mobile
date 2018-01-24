<template>
    <div class="header">
        <div class="header-bg"></div>
        <div class="logo">Golang123</div>
    </div>
</template>

<script>
    import flexible from '~/utils/flexible'
    console.log(123)
    flexible()

    export default {
        props: [
            'user'
        ],
        data () {
            return {
            }
        },
        methods: {
        },
        mounted () {
        }
    }
</script>

<style>

</style>
