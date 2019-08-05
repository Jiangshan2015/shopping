<template>
  <div class="me-div">
    <p>我的</p>
    <div class="top-line"></div>
    <div class="top-cell">
      <van-image round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <button>立即登录</button>
      <van-icon name="photograph" />
    </div>
    <van-cell-group v-for="(item, index) in funDataList" :key="index">
      <van-cell :title="item" value is-link class="cell" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="安全模式" value class="cell" />
    </van-cell-group>

    <van-tabbar class="tab_bar" v-model="tabarActive">
      <van-tabbar-item icon="wap-home" @click="redirects('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="redirects('/community')">社区</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="redirects('/me')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabarActive: 3,
      funDataList: ["我的信用评分", "物流信息", "联系人管理", "密码设置"]
    };
  },
  methods: {
    redirects(url) {
      this.$router.push(url);
    }
  },
  created() {}
};
</script>

<style  lang="less" scoped>
@import url("../assets/css/me.less");
</style>
