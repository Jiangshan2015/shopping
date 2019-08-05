<template>
  <div id="app">
    <!-- 搜索 -->
    <van-row gutter="20" class="row-1">
      <van-col span="3" class="cols">
        <a href="#" @click="redirects('/login')">登录</a>
      </van-col>
      <van-col span="19" class="cols">
        <form action="/" class="search">
          <van-search
            v-model="value"
            style="background:white;height:35px;border-radius:22px;"
            placeholder="大家在搜索：衣服"
            @click.stop="search"
          />
        </form>
      </van-col>
      <van-col span="2" class="cols">
        <van-icon name="qr" class="classfic" @click="redirects('/about')" />
      </van-col>
    </van-row>

    <!-- 标签栏，滑动广告栏区 -->
    <van-row gutter="20" class="ad_div">
      <van-tabs v-model="active">
        <van-tab v-for="index in 7" :title="title[index]" :key="index.id" class="tab">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div v-if="title[index]== '今日推荐'" class="contain">
              <swiper class="swiper" :tabs="title[index]" />
              <van-row class="col-2">
                <van-col class="row-2" span="6" v-for="(v,index) in icon" :key="v.id">
                  <a href="#">
                    <img :src="path+'icon/'+icon[index]+'.png'" @click="tip()" />
                    <span>{{bageTitle[index]}}</span>
                  </a>
                </van-col>

                <!-- 通知 -->
                <!-- <van-col span="24" style="margin-top:20px;" >
                  <van-notice-bar
                    left-icon="https://img.yzcdn.cn/1.png"
                    text="通知啦通知啦，新活动上线啦。"
                  />
                </van-col>-->
              </van-row>

              <active :tabs="title[index]" />
            </div>
            <div v-if="title[index]== '时尚'" class="contain">
              <active :tabs="title[index]" />
            </div>
            <div v-if="title[index] != '今日推荐' && title[index] != '时尚' " class="contain">
              <swiper class="swiper" :tabs="title[index]"></swiper>
              <active :tabs="title[index]" />
            </div>
          </van-pull-refresh>
        </van-tab>
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
import { mapState, mapGetters } from "vuex";
import Swiper from "./swiper";
import Active from "./active";
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      active: "",
      tabarActive:0,
      isLoading: false,
      path: "../../static/images/"
    };
  },
  components: {
    Swiper,
    Active
  },
  computed: {
    ...mapState({
      title: state => state.home.tab.title,
      icon: state => state.home.badge.icon,
      bageTitle: state => state.home.badge.title
    })
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
    redirects(url) {
      this.$router.push(url);
    },
    onRefresh() {
      this.isLoading = false,
      setTimeout => (
        {
          // this:$toast('刷新成功'),
          // this.isLoading = false,
        },
        500
      );
    }
  }
};
</script>

<style lang="less" scope>
@import url("../assets/css/home.less");
</style>

