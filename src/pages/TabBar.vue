<template>
    <div class="tabbar">
        <router-link to="/home">首页</router-link>
        <router-link to="/sorts">类别</router-link>
        <router-link to="/sesscions">主会场</router-link>
        <router-link to="/market">购物车</router-link>
        <router-link to="/mine">我的酒仙</router-link>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
.tabbar{
  position: fixed;
  left:0;
  bottom:0;
  background-color:blanchedalmond;
  width:100%;
  height: 60px;
  line-height:60px;
  display:flex;
} 
.tabbar a{
  text-decoration:none;
  flex:1;
  text-align:center;
}
</style>