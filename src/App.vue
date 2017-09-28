<template>
  <div id="app">
      <!-- <hello></hello> -->
      <tab-bar v-show="isShowTabBarFn()"></tab-bar>
      <!-- 使用router-view组件 标签 进行组件显示 -->  
      <router-view></router-view>
  </div>
</template>
<script>
import TabBar from './pages/TabBar' 
export default {
  name: 'app',
  components: {
    TabBar
  },
  methods:{
    isShowTabBarFn() {
      return this.$route.path.indexOf('/sorts/') == -1 ? true : false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
h1{
  color:red;
}

</style>
