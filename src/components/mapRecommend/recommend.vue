
<template>
  <div class="wrappers">
    <div class="recommend">
      <div class="content-box">
        <div class="nav-text">
          <div class="label">猜你喜欢</div>
        </div>
      </div>
      <itemLists v-for="(item, index) in dataLists" :key="index" :listItem ="item" :value="item.score"/>
    </div>
  </div>
</template>
<script>
import api from "@/API/api.js";
import itemLists from "@/components/mapRecommend/itemList.vue";
export default {
  components: {
    itemLists
  },
  data() {
    return {
      dataLists: []
    };
  },
  mounted() {
    api.recommendProduct().then(resp => {
      // eslint-disable-next-line no-console
      console.log(JSON.parse(JSON.stringify(resp.data.data)));
      this.dataLists = resp.data.data;
    });
  }
};
</script>
<style>
.recommend::-webkit-scrollbar {
  display: none;
}
.recommend {
  overflow-y: scroll;
}
.wrappers {
  width: 250px;
  box-sizing: border-box;
  margin-left: 10px;
  overflow: hidden;

  /* border: 1px solid; */
}
.content-box {
  margin-top: 10px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 0;
  width: 230px;
  box-sizing: border-box;
  /* height: 300px; */
}
.nav-text {
  margin-bottom: 12px;
}
.nav-text .label {
  font-size: 16px;
  color: #333333;
  line-height: 22px;
  font-weight: 500;
}
.recommend-list .recommend-item {
  margin-bottom: 20px;
  display: inline-block;
  width: 190px;
  text-decoration: none;
}
.recommend-card-wrapper {
  width: 100%;
  box-sizing: border-box;
}
.recommend-card-wrapper .img-box {
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  background-color: #f4f4f4;
  background-image: url(//p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 4px;
  overflow: hidden;
}
.recommend-card-wrapper .img-box img {
  width: 100%;
  font-size: 0;
}
.recommend-card-wrapper .info-box {
  position: relative;
  margin-top: 10px;
}
.recommend-card-wrapper .info-box .title {
  font-size: 14px;
  color: #222222;
  line-height: 20px;
  width: 100%;
  margin: 0;
  font-weight: 500;
}
.recommend-card-wrapper .info-box .score-line div {
  display: inline-block;
}
.recommend-card-wrapper .info-box .score {
  position: relative;
}
.recommend-card-wrapper .info-box .score-line .comment-number {
  position: absolute;
  right: -65 px;
  top: 0;
  font-size: 12px;
  color: #999;
  height: 24px;
  line-height: 24px;
  margin-left: 10px;
}
.recommend-card-wrapper .info-box .score-line.aligned {
  height: 24px;
}
.recommend-card-wrapper .info-box .desc-line .desc {
  font-size: 12px;
  color: #999999;
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 4px;
}
.recommend-card-wrapper .info-box .desc-line.aligned {
  height: 18px;
}
.recommend-card-wrapper .info-box .bottom-line {
  position: relative;
}
.recommend-card-wrapper .info-box .bottom-line div {
  display: inline-block;
}
.recommend-card-wrapper .info-box .bottom-line .price-box {
  color: #ff6600;
}
.recommend-card-wrapper .info-box .bottom-line .price-box .yuan {
  font-size: 14px;
  font-weight: 700;
}
.recommend-card-wrapper .info-box .bottom-line .price-box .price-number {
  font-size: 22px;
  letter-spacing: -0.5;
}
.recommend-card-wrapper .info-box .bottom-line .price-box .price-desc {
  font-size: 12px;
  margin-left: 4px;
  font-weight: 700;
}
</style>