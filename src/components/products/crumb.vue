<template>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.position.name}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position.name}}{{$route.params.name}}</el-breadcrumb-item>
      </el-breadcrumb>
</template>
<script>
// eslint-disable-next-line no-unused-vars

export default {
    methods:{
      

    },
    computed:{
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss'
</style>