<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <NavMenu />
      </el-col>
      <el-col :span="19">
        <mLife />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mContainer :navs="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mContainer :navs="laidBack" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavMenu from "../components/index/menu.vue";
import mLife from "../components/index/life.vue";
import mContainer from "../components/index/container.vue";

export default {
  data() {
    return {
      // 传出去数据 在用到地方接收数据
      iStyle: {
        title: "有格调",
        class: "istyle",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      laidBack: {
        title: "狠优惠",
        class: "youhui",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  },
  components: {
    NavMenu,
    mLife,
    mContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>                                    