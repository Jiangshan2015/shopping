<template>
  <div>
    <p>社区</p>
    <van-row span="24">
      <van-tabs>
        <van-tab v-for="(item, index) in title" :key="index" :title="item"></van-tab>
      </van-tabs>
    </van-row>

    <van-tabbar class="tab_bar" v-model="tabarActive">
      <van-tabbar-item icon="wap-home" @click="redirects('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="redirects('/community')">社区</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="redirects('/me')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Swiper from "./swiper";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      tabarActive: 1,
      imageList: [],
      activeTitle: null,
      days: null,
      broadcast:null,
    };
  },
  methods: {
    redirects(url) {
      this.$router.push(url);
    }
  },
  computed: {
    ...mapState({
      title: state => state.community.tab.title
    })
    // titles:state =>state.home.tab.title,
  },
  created() {},
  beforeCreate() {
  
    this.axios.get("./static/data.json").then(
      res=> {
        if (res.status == 200) {
          const data = res.data.home;
          this.broadcast = data.broadcast;
        } else {
          this.imageList = this.src;
          this.broadcast = "暂无消息~~QAQ~";
        }
      },
      err => {
        this.imageList = this.src;
        this.broadcast = "暂无消息~~QAQ~";
      }
    );
  },
};
</script>

<style scoped>
</style>
