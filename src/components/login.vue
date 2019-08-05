<template>
  <div id="login-app">
    <div class="login">

      <van-icon name="cross"  class="close_icon" @click="redirects('/home')"/>
      <p>欢迎登录购物商城</p>
      <van-image round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="login_area">
        <van-field
          clearable
          label="手机"
          placeholder="请输入手机号"
          class="login-text"
          @touchstart.stop="show = true"
          :value="value"
        />

        <van-field type="password" label="密码" placeholder="请输入密码" class="login-text" />

        <van-number-keyboard
          :show="show"
          close-button-text="完成"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
          v-model="value"
          :maxlength="11"
        />

        <van-button type="primary" class="login_btn">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      value: ""
    };
  },
  methods: {
    onInput(value) {
      console.log(value);
    },
    onDelete() {},
    redirects(url) {
      this.$router.push(url);
    },
  }
};
</script>

<style lang="less">
@import url("../assets/css/login.less");
</style>
