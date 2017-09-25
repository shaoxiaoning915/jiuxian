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
       <div>
           <img src="../imgs/nav3_1.jpg" alt="">
        </div>
        <div>
           <img src="../imgs/nav3_2.jpg" alt="">
           <img src="../imgs/nav3_3.jpg" alt="">
        </div>
      
   </div>
</template>
    
<script>
export default {
  name: "daohang",
  data () {
    return {
        img1:["nav1_1.jpg","nav1_2.jpg","nav1_3.jpg","nav1_4.jpg","nav1_5.jpg"],
        img2:["nav2_1.jpg","nav2_2.jpg","nav2_3.jpg","nav2_4.jpg","nav2_5.jpg"],
        img3:"../imgs/nav2_1.jpg",
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