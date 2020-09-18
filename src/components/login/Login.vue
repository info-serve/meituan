<template>
  <div class="login page-login">
    <div class="login-header">
      <a class="logo" href="/index"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input
          :class="{error:!userName && error}"
          placeholder="手机号/用户名/邮箱"
          v-model="userName"
          clearable
          prefix-icon="el-icon-user-solid"
        ></el-input>
        <el-input
          placeholder="密 码"
          :class="{error:!passWord && error}"
          v-model="passWord"
          type="password"
          clearable
          prefix-icon="el-icon-s-goods"
        ></el-input>
        <div class="foot">
          <a href="javascriot:void(0)">忘记密码?</a>
        </div>
        <el-button type="primary" @click="subSitBtn()" @keyup.enter="subSitBtn()">登录</el-button>
        <p class="reg">
          还没有账号？
          <a href="/register" target="_top">免费注册</a>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import api from "@/API/api.js";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      error: ""
    };
  },
  methods: {
    subSitBtn() {
      // // eslint-disable-next-line no-console
      // console.log(this.userName,this.passWord)
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.passWord) {
        this.error = "请输入密码";
        return false;
      }
      api
        .login({
          userName: this.userName,
          password: this.passWord
        })
        .then(res => {
          if (res.data.status == "success") {
            //成功跳转页面并且把用户信息展示
            this.$store.dispatch("setUsers", res.data);
            //  localStorage.setItem('user',JSON.stringify(res.data.data));
            this.$router.push({ name: "index" });
            // eslint-disable-next-line no-console
            console.log(
              this.userName,
              res.data,
              this.$store.state.user.data,
              JSON.stringify(res.data.data)
            );
          } else {
            this.error = res.data.msg;
          }
        });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>