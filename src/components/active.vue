<template>
  <div id="app">
    <van-row class="col-2">
      <van-col span="24">
        <h5>{{actives[0]}}</h5>
      </van-col>
    </van-row>

    <vue-lazy-component
      class="lazys"
      v-waterfall-lower="loadMore"
      waterfall-disabled="disabled"
      waterfall-offset="300"
    >
      <!-- <li v-for="(item, index) in list" :key="index">{{ item }}</li> -->
      <van-row v-for="(item, index) in imageList" :key="index">
        <img name="adapter" v-lazy="item" alt srcset />
        <van-col span="16" offset="2" class="lazy-left">
          <h4>{{activeTitle[index]}}</h4>
        </van-col>
        <van-col span="6" class="lazy-right">
          <span>{{'剩余'+days[index]+'天'}}</span>
        </van-col>
      </van-row>
    </vue-lazy-component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { component as VueLazyComponent } from "@xunlei/vue-lazy-component";
import Waterfall from "@vant/waterfall";

export default {
  name: "active",
  data() {
    return {
      active: 0,
      imageList: [],
      activeTitle: "",
      activeTitle: null,
      days: null,
      disabled: false
    };
  },
  components: {
    "vue-lazy-component": VueLazyComponent
  },
  props: {
    tabs: {
      type: String,
      required: true,
      default() {
        return {
          tabs: "errorTitle"
        };
      }
    }
  },
  directives: {
    //瀑布流
    WaterfallLower: Waterfall("lower")
  },
  computed: {
    ...mapState({
      actives: state => state.active.home.title
    })
  },
  methods: {
    loadMore() {
      this.disabled = true;
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.imageList.push(this.imageList[i]);
        //   this.activeTitle.push(this.activeTitle[i]);
        //   this.days.push(this.days[i]);
        // }
        this.disabled = false;
      }, 200);
    },
    redirects(url) {
      this.$router.push(url);
    }
  },
  beforeCreate() {
    this.axios.get("./static/data.json").then(
      res => {
        if (res.status == 200) {
          const data = res.data.home;
          this.days = data.active.days;
          switch (this.tabs) {
            case "今日推荐":
              this.activeTitle = data.active.tuijian_title;
              this.imageList = data.imageList;
              console.log(this.imageList.length)
              break;
            case "时尚":
              this.activeTitle = data.active.shishang_title;
              this.imageList = data.shishangImglist;
              console.log(this.imageList);
              break;
            case "美妆":
              this.activeTitle = data.active.meizhuang_title;
              this.imageList = data.meizhuangImglist;
              break;
            case "家电":
              this.activeTitle = data.active.jiadian_title;
              this.imageList = data.jiadianImglist;
              break;
            case "家居":
              this.activeTitle = data.active.jiaju_title;
              this.imageList = data.jiajuImglist;
              break;
            case "国际":
              this.activeTitle = data.active.guoji_title;
              this.imageList = data.guojiImglist;
              break;
            case "生活":
              this.activeTitle = data.active.shenghuo_title;
              this.imageList = data.shenghuoImglist;
              break;
            default:
              break;
          }

          //  console.log(res.data.home.active,this.days,this.activeTitle)
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
  created() {
    console.log(this.imageList);
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/home.less");
</style>