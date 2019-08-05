// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex);

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);



Vue.config.productionTip = false

//ui组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//瀑布流
import Waterfall from '@vant/waterfall';
Vue.use(Waterfall);

import store from './store/index'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
