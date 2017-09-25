<template>
<div id="top">
     <header >
        <div><img src="../imgs/jx-sprite.png" alt=""></div>
        <div><input type="text"></div>
        <div>搜索</div>
    </header>
    <!-- 回到顶部按钮 -->
    <a class="back" href="#"></a>
</div>
      
        
</template>
    
<script>
export default {
  name: "top",
  data () {
    return {
     
    };
  }
}
</script>
    
<style lang="css" scoped>
    #top {
        /* color:black; */
        font-size: 1rem;
    }
    header{
        position: fixed;
        width: 100%;
        height: 0.4rem;
        background: rgba(232, 82, 84, 0.9);
    }
    header div{
       float: left;
    }
    header div:nth-child(1){
        width: 0.6rem;
        height: 0.3rem;
        overflow: hidden;
        border-radius: 0.04rem;
        margin: 0.05rem 0 0 0.1rem;
    }
    header div:nth-child(1) img{
        vertical-align: top;
        width: 370%;
        height: 260%;
        border: none;
        top: 0;
    }
     header div:nth-child(2){
        width: 1.8rem;
        height: 0.3rem;
        /* background: black; */
        margin: 0.05rem 0 0 0.1rem;
        border-radius: 0.06rem;
        overflow: hidden;
    }
    header div:nth-child(2) [type = text]{
        width: 100%;
        height: 80%;
        outline: none;
        border: none;
        float: left;
        margin: 1.5% 0 0 0;
        text-indent: 1em;
    }
     header div:nth-child(3){
        width: 0.4rem;
        height: 0.3rem;
        /* background: black; */
        margin: 0.05rem 0 0 0.1rem;
        border-radius: 0.04rem;
        font-size: 0.12rem;
        line-height: 0.3rem;
        text-align: center;
        color: white;
    }
    /* 回到顶部 */
   .back{
       width: 0.5rem;
       height: 0.5rem;
       background: white url("../imgs/jx-sprite.png") no-repeat -117px -5px;
       background-size: 360% 120%;
       position: fixed;
       right: 0.1rem;
       bottom: 0.6rem;
       border-radius:0.25rem;
       border: 1px solid #e9eaeb;
   }
</style>