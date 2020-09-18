<template>
  <div class="goods page-product">
    <el-row  class="m-crumbs" height="0px">
      <mCrumb />
    </el-row>
    <el-row  height="0px"> 
      <el-col :span="19">
        <el-row>
            <categroy />
        </el-row>
        <el-row  height="0px">
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        <map-recommend />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mCrumb from "../components/products/crumb.vue";
import categroy from "@/components/products/categroy.vue"
import List from "@/components/products/productList.vue"
import mapRecommend from "@/components/mapRecommend/index.vue"
export default {
    components:{
      mCrumb,
      categroy,
      List,
      mapRecommend
    }
};
</script>
<style lang="scss">

    @import '@/assets/css/products/index.scss'
    
</style>