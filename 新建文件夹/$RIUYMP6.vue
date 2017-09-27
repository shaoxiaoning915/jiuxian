<template>
  <div id="index">
      <!-- 顶部 -->
    <header>
        <div><img src="./imgs/jx-sprite.png" alt=""></div>
        <div><input type="text"><span><img src="./imgs/jx-sprite.png" alt=""></span></div>
        <div>搜索</div>
    </header> 
    <!-- 回到顶部按钮 -->
    <a class="back" href="#"></a> 
        <!-- 轮播图 -->
    <div id="banner">         
        <ul id="marquee">
            <li><img src="./imgs/1.jpg" alt="banner_1" ></li>
        </ul>  
   </div>
   
    <div id="zhuti">
       <div></div>
       <div></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>
       <div class="inner"><img src="./imgs/banner_1.jpg" alt=""></div>   
   </div>





        <!-- <router-link to="/sorts">类别</router-link> -->
        <!-- <div id="bottom">
          <router-link to="/home">首页</router-link>
          <router-link to="/sesscions">主会场</router-link>
          <router-link to="/market">购物车</router-link>
          <router-link to="/mine">我的酒仙</router-link>
        </div> -->
        <!-- 菜单 -->
        <!-- <div id="box">
           <div>     
                <daohang1></daohang1> 
                <daohang2></daohang2>
                <daohang3></daohang3>
                <daohang4></daohang4>
                <daohang5></daohang5>
            </div>
            <div>     
                <daohang6></daohang6>
                <daohang7></daohang7>
                <daohang8></daohang8>
                <daohang9></daohang9>
                <daohang10></daohang10>
            </div> 
        </div> -->
   </div>
</template>
   

    
<script >
// import Top from './Top'
// import Banner from './pages/Banner'

// import Daohang1 from './Daohang/Daohang1'
// import Daohang2 from './Daohang/Daohang2'
// import Daohang3 from './Daohang/Daohang3'
// import Daohang4 from './Daohang/Daohang4'
// import Daohang5 from './Daohang/Daohang5'
// import Daohang6 from './Daohang/Daohang6'
// import Daohang7 from './Daohang/Daohang7'
// import Daohang8 from './Daohang/Daohang8'
// import Daohang9 from './Daohang/Daohang9'
// import Daohang10 from './Daohang/Daohang10'

// import Bottom from './pages/Bottom'

export default {
  name: "index",
  data () {
    return {
       
    };
  },
    components: {
    // Top:Top
    // Banner:Banner,
    // Daohang1:Daohang1,
    // Daohang2:Daohang2,
    // Daohang3:Daohang3,
    // Daohang4:Daohang4,
    // Daohang5:Daohang5,
    // Daohang6:Daohang6,
    // Daohang7:Daohang7,
    // Daohang8:Daohang8,
    // Daohang9:Daohang9,
    // Daohang10:Daohang10,
    // Bottom:Bottom,
    // Zhuti:Zhuti,
    
  }
}
</script>
   
<style lang="css" scoped>
*{
    margin: 0px;
    padding: 0px;
}
#index{
    width: 100%;
} 
/* 酒类导航
#box{
    width: 100%;
    font-size: 0;
} */
#box>div{
    display: flex;
    justify-content: space-around;
    height: 0.675rem;
}
#box> div daohang1{
    width: 100%;
    height: 100%;
}
/* 头部 */
header{
    position: fixed;
    width: 100%;
    height: 0.4rem;
    background: rgba(232, 82, 84, 0.9);
}
/* 头部的三个子div */
header div{
    float: left;
}
/* 酒仙logo的div */
header div:nth-child(1){
    width: 0.6rem;
    height: 0.3rem;
    overflow: hidden;
    border-radius: 0.04rem;
    margin: 0.05rem 0 0 0.1rem;
}
/* 酒仙logo */
header div:nth-child(1) img{
    vertical-align: top;
    width: 370%;
    height: 260%;
    border: none;
    top: 0;
}
/* 搜索框div */
header div:nth-child(2){
    width: 2.2rem;
    height: 0.3rem;
    margin: 0.05rem 0 0 0.1rem;
    border-radius: 0.06rem;
    overflow: hidden;
    position: relative;
}
header div:nth-child(2) span{
    display: block;
    position: absolute;
    width: 0.3rem;
    height: 100%;
    overflow: hidden;
}
header div:nth-child(2) img{
    margin: 0.08rem 0 0 -0.64rem;
    width: 720%;
    height: 240%;
}
/* 搜索框  text */
header div:nth-child(2) [type = text]{
    width: 100%;
    height: 80%;
    outline: none;
    border: none;
    float: left;
    margin: 1.5% 0 0 0;
    text-indent: 0.3rem;
}
/* 搜索按钮 */
header div:nth-child(3){
    width: 0.4rem;
    height: 0.3rem;
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
    background: white url("./imgs/jx-sprite.png") no-repeat -117px -5px;
    background-size: 360% 120%;
    position: fixed;
    right: 0.1rem;
    bottom: 0.6rem;
    border-radius:0.25rem;
    border: 1px solid #e9eaeb;
}
/* 轮播图div */
#banner{
    width: 100%;
    height: 1.56rem;
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

#zhuti{
    width: 100%;
    /* height: 20rem; */
    background: red;
}
#zhuti div:nth-child(1){
    width: 100%;
    height: 0.65rem;
    background: skyblue;
}
#zhuti div:nth-child(2){
    width: 100%;
    height: 1.6rem;
    background: black;
}
.inner{
    width: 100%;
    height: 0.8rem;
    background: white;
}
.inner img{
    width: 100%;
    height: 100%;
    vertical-align:top;
}
</style>
