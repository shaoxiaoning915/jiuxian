// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入vue-resource(2.x不推荐使用这个)
import Vueresourse from 'vue-resource'

// 全局配置
Vue.use(Vueresourse)

// 引入router
import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
