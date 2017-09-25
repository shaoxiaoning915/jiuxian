<template>
    <div class="head">
       { msg } 
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        msg: 'sxn'
    };
  }
}
</script>
    
<style lang="css" scoped>
    .head{
      color:red;
    }
</style>