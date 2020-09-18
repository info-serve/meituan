<template>
    <el-row class="TopBar top m-header m-header-topba">
       <el-col :span="10">
           <geoArea />
         </el-col>
       <el-col :span="14">
         <navigations />
         </el-col>

    </el-row>
</template>

<script>
import geoArea from './geo.vue'
import navigations from "./nav.vue"
export default {
   components:{
     geoArea,
     navigations
   }
}
</script>

<style  lang="scss">
  @import '@/assets/css/public/header/topbar.scss'

</style>
