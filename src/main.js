// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import swiper from '../static/javascript/swiper.min'
import logosrc from './pages/img/icon123_03.png'
// 导入懒加载模块
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
//导入路由配置模块index.js
import router from './router'
// 导入resource模块
import resource from 'vue-resource'

// import swiper from "../static/javascript/swiper.min"
// 全局注册
Vue.use(VueLazyload,{
  error:logosrc, //请求失败后显示的图片
  loading:logosrc, //加载过渡的效果
  try:2 //加载图片数量
})
Vue.use(resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
