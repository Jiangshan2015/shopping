<template>
  <div id="sech">
    <van-row gutter="20">
      <van-col span="3">
        <a href="javaScript:;" @click.prevent="search_shows">
          <van-icon name="arrow-left" class="back-icon" />
        </a>
      </van-col>
      <van-col span="21">
        <form action="/" class="search">
          <van-search
            style="background:white;height:35px;border-radius:22px;"
            placeholder="大家在搜索：衣服"
            @click.stop="search"
          />
        </form>
      </van-col>
    </van-row>
    <p>热门搜索</p>
    <van-button class="remen" plain hairline type="info" size="small" v-for="(item, index) in remen" :key="index">{{item}}</van-button>
    <!-- <van-button class="remen" size="small"  ></van-button> -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      remen:["羽绒服","围巾","面膜","护肤","大衣","女靴","口红","男装"],
    }
  },
  computed: {
   
  },
  methods: {
    search_shows() {
      this.$router.back(-1);
    },
    onCancel(){
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import url("../assets/css/search.less");
</style>>
