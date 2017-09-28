<template>
  <div id="app">
      <!-- <hello></hello> -->
      <div class="tabbar"> 
        <router-link to="/home">首页</router-link>
        <router-link to="/sorts">类别</router-link>
        <router-link to="/sesscions">主会场</router-link>
        <router-link to="/market">购物车</router-link>
        <router-link to="/mine">我的酒仙</router-link>
      <!-- 使用router-view组件 标签 进行组件显示 -->
      </div>  
      <router-view></router-view>
  </div>
</template>
<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
  margin-top: 60px;
}
h1{
  color:red;
}
#app .tabbar{
  position: fixed;
  left:0;
  bottom:0;
  background-color:blanchedalmond;
  width:100%;
  height: 60px;
  line-height:60px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}
#app .tabbar a{
  text-decoration:none;
  /* flex:1; */
}
</style>
