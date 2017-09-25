<template>
    <div id="banner"> 
            
        <ul id="marquee">
            <li><img src="../imgs/1.jpg" alt="banner_1" ></li>
            <li><img src="../imgs/2.jpg" alt="banner_1"></li>
        </ul>  
   </div>
   
</template>
    
<script>
export default {
  name: "banner",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    #banner{
        width: 100%;
        height: 1.56rem;
        /* margin: 2rem 0 0 0; */
        background: white;
    }
    #banner li{
         width: 100%;
         height: 99%;
    }
    #banner li img{
        width: 100%;
        height: 100%;
    }
</style>