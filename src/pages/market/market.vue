<template>
    <div id="market">
       <h1>{{ pageName }}</h1>
   </div>
</template>
    
<script>
export default {
  name: "market",
  data () {
    return {
        pageName:"我是购物车"
    };
  }
}
</script>
    
<style lang="css" scoped>
    #market h1{
        color:blueviolet;
    }
</style>
