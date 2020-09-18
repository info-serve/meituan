<template>
  <div class="m-products-list">
    <ul>
      <!-- <li>智能排序</li>
            <li>价格排序</li>
            <li>人气最高</li>
      <li>评价最高</li>-->
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active':item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <s-item v-for="(item,index) in dataList" :key="index" :meta="item" :value="item.score" />
    </el-row>
  </div>
</template>
<script>
import sItem from "./item.vue";
import api from "@/API/api.js";
export default {
  components: {
    sItem
  },
  data() {
    return {
      
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      dataList: []
      // dataList: [
      //   {
      //     image: "https://p1.meituan.net/msmerchant/def5b31e2568515286773f1d6f5d080d119672.jpg@220w_125h_1e_1c",
      //     title: "火鸡老店",
      //     type: "food",
      //     score: 4.1,
      //     commentNum: 0,
      //     comment: [
      //       {
      //         username: "xxxx",
      //         evalaute: "好吃"
      //       }
      //     ],
      //     tab: ["火锅", "沙河"],
      //     address: "昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里",
      //     avgPrice: 64,
      //     dealItems: [
      //       {
      //         title: "火鸡宴，建议10-14人使用",
      //         price: 909,
      //         counterPrice: 1150,
      //         saleNum: 0,
      //         priceType: "元"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  created() {
    api.getProductList().then(res => {
      // eslint-disable-next-line no-console
      // console.log(res)
      this.dataList = res.data.data;
    });
  },
};
</script>
<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>