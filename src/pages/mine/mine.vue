<template>
    <div id="mine">
       <h1>{{ pageName }}</h1>
   </div>
</template>
    
<script>
export default {
  name: "mine",
  data () {
    return {
        pageName:"我是我的酒仙"
    };
  }
}
</script>
    
<style lang="css" scoped>
    #mine h1{
        color:blueviolet;
    }
</style>
