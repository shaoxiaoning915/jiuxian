<template>
    <div id="main">
       <h1>{{ pageName }}</h1>
   </div>
</template>
    
<script>
export default {
  name: "main",
  data () {
    return {
        pageName:"我是主会场"
    };
  }
}
</script>
    
<style lang="css" scoped>
    #main h1{
        color:blueviolet;
    }
</style>
