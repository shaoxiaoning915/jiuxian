<template>
    <div id="index">
       <h1>{{ pageName }}</h1>
   </div>
</template>
    
<script>
export default {
  name: "index",
  data () {
    return {
        pageName:"我是首页"
    };
  }
}
</script>
    
<style lang="css" scoped>
    #index h1{
        color:blueviolet;
    }
</style>
