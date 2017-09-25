<template>
<!-- 底部父div -->
    <div id="bottom">
      <!-- 底部图标子div -->
       <div>
         <img src="../imgs/footer_1.png" alt="">
       </div>
       <div>
         <img src="../imgs/footer_2.png" alt="">
       </div>
       <div>
         <img src="../imgs/footer_3.png" alt="">
       </div>
       <div>
         <img src="../imgs/footer_4.png" alt="">
       </div>
       <div>
         <img src="../imgs/footer_5.png" alt="">
       </div>
   </div>
</template>
    
<script>
export default {
  name: "bottom",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
/* 底部div */
    #bottom{
      width: 100%;
      height: 0.42rem;
      position: fixed;
      bottom: 0;
      background: #f1f1f1;
      border-top: 1px solid #dddddd;
      display: flex;
      justify-content: space-around;
    }
    /* 底部图标div */
    #bottom div{
      width: 0.42rem;
      height: 0.348rem;     
    }
  /* 底部图标img */
    #bottom img{
      width: 100%;
      height:100%;
      vertical-align: top;
    }
  /* 底部第三个图标div */
    #bottom div:nth-child(3){
    width: 0.4rem; 
    height: 0.4rem; 
    }
  /* 底部第三个图标img */
     #bottom div:nth-child(3) img{
      width: 100%;
      height:100%;
      vertical-align: top;
    }
</style>