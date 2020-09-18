<template>
  <div class="m-istyle">
    <!-- 1 -->
    <!-- <dl @mouseover="over">
    <dt>有格调</dt>-->
    <!-- data-tyle保存类型 类型名字要和后端约定好-->
    <!-- <dd :class="{active : kind == 'all'}" data-type="all">全部</dd>
      <dd :class="{active : kind == 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active : kind == 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active : kind == 'movie'}" data-type="movie">电影出演</dd>
      <dd :class="{active : kind == 'travel'}" data-type="travel">品质出游</dd>
    </dl>-->
    <!-- 2 -->
    <dl @mouseover="over" :class="navs.class">
      <dt>{{navs.title}}</dt>
      <dd
        v-for="(item,index) in navs.list"
        :class="{active : kind == item.tab}"
        :data-type="item.tab"
        :key="index"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <!-- <li>
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img
            src="//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c"
            class="image"
          />
          <div class="cbody">
            <div class="title" title="大董（王府井店）">哈根达斯（国瑞店）</div>
            <div class="sub-title" title="花火蛋糕冰淇淋1个，约700克，圆">花火蛋糕冰淇淋1个，约700克，圆</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">258</span>
                <span class="old-price">门市价¥298</span>
              </span>
              <span class="sold bottom-right-info">崇文门</span>
            </div>
          </div>
        </el-card>
      </li>-->
      <!-- <li v-for="(item,index) in listData " :key="index">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info" v-if="item.renType && item. price_info.currentPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.currentPrice}}</span>
              </span>
              <span class="old-price">门市价￥{{item.price_info.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.renType">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">已抢光</span>
              </span>
            </div>
            人均了
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}} </span>
                <span class="units">/ {{item.price_info.uits}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li> -->
      <!-- 是遍历resultData的项kind -->
      <li v-for="(item,index) in resultData[kind] " :key="index">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info" v-if="item.renType && item.price_info.currentPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.currentPrice}}</span>
              </span>
              <span class="old-price">门市价￥{{item.price_info.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.renType">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">已抢光</span>
              </span>
            </div>
            <!-- 人均了 -->
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}} </span>
                <span class="units">/ {{item.price_info.uits}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
 import api from '@/API/api.js'
export default {
 
  data() {
    return {
      kind: "all",
      resultData:{
        //返回来的结构
          
      }
      // listData: [
      //   {
      //     image:
      //       "//p1.meituan.net/msmerchant/10d8740ef9c0a997014f89aa44ecbe9c362546.jpg@368w_208h_1e_1c",
      //     title: "大董（王府井店）",
      //     subTitle: "酥不腻小雏鸭套餐，建议2人使用",
      //     price_info: {
      //       currentPrice: null,
      //       oldPrice: null,
      //       avg_price:69,
      //       uits:'人均',//单位
      //     },
      //     address: "王府井/东单",
      //     renType: 10 //销售完了
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c",
      //     title: "哈根达斯（国瑞店）",
      //     subTitle: "花火蛋糕冰淇淋1个，约700克，圆",
      //     price_info: {
      //       currentPrice: 258,
      //       oldPrice: 259,
      //     },
      //     address: "崇文门",
      //     renType: 10
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/msmerchant/10d8740ef9c0a997014f89aa44ecbe9c362546.jpg@368w_208h_1e_1c",
      //     title: "大董（王府井店）",
      //     subTitle: "酥不腻小雏鸭套餐，建议2人使用",
      //     price_info: {
      //       currentPrice: 399,
      //       oldPrice: 500,
      //     },
      //     address: "王府井/东单",
      //      renType: 100
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c",
      //     title: "哈根达斯（国瑞店）",
      //     subTitle: "花火蛋糕冰淇淋1个，约700克，圆",
      //     price_info: {
      //       currentPrice: 258,
      //       oldPrice: 259,
      //     },
      //     address: "崇文门",
      //     renType: 0
      //   }
      // ],
    };
  },
  //   接收父组件传来的数据
  props: ["navs"], //2
  created(){
    api.getcontentData().then(res=>{
      // eslint-disable-next-line no-console
      // console.log(res)
      this.resultData = res.data.data
    })

  },
  methods: {
    over(e) {
      //  console.log(e.target)
      let oDom = e.target;
      let tagName = oDom.tagName.toLowerCase(); //转化成小写
      // eslint-disable-next-line no-console
      // console.log(tagName)
      if (tagName != "dd") {
        return false;
      }
      this.kind = oDom.getAttribute("data-type");
      //动态获取数据 Ajax请求
    }
  }
};
</script>