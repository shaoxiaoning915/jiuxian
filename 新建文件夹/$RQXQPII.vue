<template>
    <div id="daohang">
       <div>     
           <a href=""><img src="../imgs/nav1_1.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav1_2.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav1_3.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav1_4.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav1_5.jpg" alt=""></a> 
       </div>
       <div>
           <a href=""><img src="../imgs/nav2_1.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav2_2.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav2_3.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav2_4.jpg" alt=""></a>
           <a href=""><img src="../imgs/nav2_5.jpg" alt=""></a> 
       </div>
      
   </div>
</template>
    
<script>
export default {
  name: "daohang",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    #daohang{
        width: 100%;
        /* height: 1.35rem; */
    }
    #daohang div{
        display: flex;
        height: 0.675rem;
    }
   
    #daohang div a{
        display: block;
        width: 100%;
         height: 0.675rem;
         font-size: 0.2rem;
    }
    #daohang div a img{
       width: 100%;
       height: 100%;
    }

    #daohang div:nth-child(3) img{
        width: 100%;
        height: 100%;
    }

    #daohang div:nth-child(3), #daohang div:nth-child(4){
        background: red;
        width: 100%;
        height: 0.79rem;
    }
    #daohang div:nth-child(4) img{
          width: 50%;
        height: 100%;
    }
</style>