import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

//引入store对象
import home from './Core_store/home';
import acitve from './Core_store/active';
import community from './Core_store/community'


export default new vuex.Store({
    modules: {
        home: home,
        active:acitve,
        community:community,
    }
})