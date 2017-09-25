// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
// 引入路由模块
import VueRouter from'vue-router'
// 全局安装路由
Vue.use(VueRouter)

import Top from './pages/Top'
import Banner from './pages/Banner'
import Daohang from './pages/Daohang'
import Bottom from './pages/Bottom'
import Zhuti from './pages/Zhuti'


// 去掉控制台警告
=======
import VueRouter from 'vue-router'
>>>>>>> shao/jiuxian
Vue.config.productionTip = false
Vue.use(VueRouter)
// 导入组件
import Home from './pages/home/home'
import Sesscions from './pages/sesscions/sesscions'
import Sorts from './pages/sorts/sorts'
import Market from './pages/market/market'
import Mine from './pages/mine/mine'
const routes =[
        { path:'', component:Home },
        { path:'/home', component:Home },
        { path:'/sorts', component: Sorts },
        { path:'/Sesscions', component: Sesscions },
        { path:'/market', component: Market },
        { path:'/mine', component: Mine }
    ]
const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
