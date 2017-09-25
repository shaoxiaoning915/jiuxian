// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Top from './pages/Top'
import Banner from './pages/Banner'
import Daohang from './pages/Daohang'
import Bottom from './pages/Bottom'
import Zhuti from './pages/Zhuti'

// 去掉控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
