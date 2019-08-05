import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Search from '@/components/search'
import Login from '@/components/login'
import About from '@/components/about'
import Community from '@/components/community'
import Me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/community',
      name:'community',
      component:Community
    },
    {
      path:'/me',
      name:'me',
      component:Me
    }

  ]
})
