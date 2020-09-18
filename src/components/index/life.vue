<template>
  <div class="m-life">
    <!-- 文本 -->
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <!-- 轮播图，登录界面 -->
    <el-row>
      <el-col :span="15">
        <Slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="5">
        <div class="m-life-login">
          <div class="seting" v-if="$store.state.user.data">
            <i class="el-icon-setting"></i>
          </div>
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          <p
            class="m-life-login-name"
          >{{$store.state.user.data ? $store.state.user.data:'Hi!你好' }}</p>
          <p  v-if="!$store.state.user.data">
            <router-link to="/register">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p  v-if="!$store.state.user.data">
            <router-link to="/login">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
          <div class="fn-row clearfix"  v-if="$store.state.user.data">
            <div class="fn-item">
              <a href="javaScript:viod(0);" target="_blank">
                <div class="icon">
                  <i class="iconfont el-icon-s-order"></i>
                </div>
                <p class="fn-name">我的订单</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="javascript:;" target="_blank">
                <div class="icon">
                  <i class="iconfont el-icon-star-off"></i>
                </div>
                <p class="fn-name">我的收藏</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="javascript:void(0);" target="_blank">
                <div class="icon">
                  <i class="iconfont el-icon-document-remove"></i>
                </div>
                <p class="fn-name">抵用券</p>
              </a>
            </div>
          </div>
          <div class="fn-row clearfix"  v-if="$store.state.user.data">
            <div class="fn-item">
              <a href="javascript:void(0);" target="_blank">
                <div class="icon">
                  <i class="iconfont el-icon-wallet"></i>
                </div>
                <p class="fn-name">余额</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="javascript:void(0);" target="_blank">
                <div class="icon">
                  <i class="iconfont el-icon-more"></i>
                </div>
                <p class="fn-name">更多</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 底轮播图  -->
    <el-row>
      <el-col :span="8">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="3">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from "../index/slider";
export default {
  components: {
    Slider
  }
};
</script>
<style>
.m-life-login .fn-row {
  margin-left: 5px;
  width: 170px;
  padding: 0 11px;
  text-align: center;
  margin: 5px;
}
.seting {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
}
.m-life-login .fn-row .fn-item {
  width: 33.3%;
  float: left;
}
.m-life-login .fn-row .fn-item a {
  text-decoration: none;
}
.m-life-login .fn-row .fn-item .fn-name {
  font-size: 12px;
  color: #000;
  margin: 5px 0;
}
.m-life-login .fn-row .fn-item .icon {
  text-align: center;
}
.m-life-login .fn-row .fn-item .icon .iconfont {
  color: #ffc300;
  font-size: 20px;
}
.clearfix{
    content: '';
    clear: both;
}
</style>
