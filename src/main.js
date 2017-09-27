// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装路由(让任何组件都可以使用路由)
Vue.use(VueRouter);


// 导入组件
import Home from './pages/home/home'
import Sesscions from './pages/sesscions/sesscions'
import Sorts from './pages/sorts/sorts'
import Market from './pages/market/market'
import Mine from './pages/mine/mine'

// 酒类组件
import Baijiu from './pages/home/type/Baijiu'

const routes =[
        { path:'', component:Home },
        { path:'/home', component:Home},
        { path:'/baijiu',component:Baijiu},
       
        // { path:'/sorts', component: Sorts },
        { path:'/Sesscions', component: Sesscions },
        { path:'/market', component: Market },
        { path:'/mine', component: Mine }
    ]
const router = new VueRouter({
    routes
})

//去掉控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})


