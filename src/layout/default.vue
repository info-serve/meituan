<template>
<div class="page-default layout-default">
<el-container>
  <el-header height="">
    <headerArea />
  </el-header>
  <el-main height="">
    <router-view></router-view>
  </el-main>
  <el-footer height="">
      <myFooter />
  </el-footer>
</el-container>
</div>
</template>
<script>
import headerArea from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
export default {
  components: {
    headerArea,
    myFooter
  }
}
</script>
<style  lang="scss">
@import "@/assets/css/public/layout.scss"
</style>
