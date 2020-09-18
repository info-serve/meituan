<template>
  <div class="items-ing">
    <div class="recommend-list">
      <a href="javascript:void(0);" class="link link recommend-item" target="_blank">
        <div class="recommend-card-wrapper">
          <div class="img-box">
            <img :src="listItem.imgUrl" class="image" />
          </div>
          <div class="info-box">
            <div class="title" title>{{listItem.title}}</div>
            <div class="score-line">
              <div class="score">
                <el-rate
                  v-model="listItem.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
                <!-- &nbsp;&nbsp;&nbsp;&nbsp;
                <span class>{{listItem.score}}分</span>
                <span v-if="listItem.score > 4.5">很好</span>
                <span v-else-if="listItem.score >4 ">好</span>
                <span v-else-if="listItem.score > 3.5">不错</span>
                <span v-else-if="listItem.score > 3">一般</span>
                <span v-else>差</span> -->
                <div class="comment-number">{{listItem.commentNum}}个评价</div>
              </div>
            </div>
            <div class="desc-line">
              <div class="desc">{{listItem.areaName}}</div>
            </div>
            <div class="bottom-line">
              <div class="price-box">
                <span>
                  <span class="yuan">￥</span>
                  <span class="price-number numfont">{{listItem.lowPrice}}</span>
                  <span class="price-desc">起</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["listItem"]
};
</script>