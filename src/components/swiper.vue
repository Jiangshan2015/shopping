<template>
  <div>
    <van-row>
      <van-col span="24">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image,index) in images" :key="index">
            <img v-lazy="image" style="width:100%;height:160px;" alt />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "swipe",
  data() {
    return {
      images: []
    };
  },
  props: {
    tabs: {
      type: String,
      required: true,
      default() {
        return {
          tabs: "err.jpg"
        };
      }
    }
  },
  computed: {
    ...mapState({
      src: state => state.home.lunbo.src
    })
  },
  methods: {
    redirect(url) {
      this.$router.push(url);
    }
  },
  beforeCreate() {
    this.axios.get("./static/data.json").then(
      res => {
        console.log("拿到数据");
        if (res.status == 200) {
          const data = res.data.home.lunbo;
          if (this.tabs == "今日推荐") {
            this.images = data.home;
          } else if (this.tabs == "美妆") {
            this.images = data.meizhuang;
          } else if (this.tabs == "家电") {
            // console.log('家电')
            this.images = data.jiadian;
            // console.log(this.images)
          } else if (this.tabs == "家居") {
            this.images = data.jiaju;
          } else if (this.tabs == "国际") {
            this.images = data.guoji;
          } else if (this.tabs == "生活") {
            this.images = data.shenghuo;
          } else {
            this.images = this.src;
          }
        } else {
          this.images = this.src;
        }
      },
      err => {
        this.images = this.src;
      }
    );
  },
  created() {
    console.log(this.tabs);
  }
};
</script>