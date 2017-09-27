<template>
    <div id="home">
        <!-- 顶部 -->
       <nav>
           <div><img src="./imgs/jx-sprite.png" alt=""></div>
           <div><input type="text"><div><img src="./imgs/jx-sprite.png" alt=""></div></div> 
           <div>搜索</div>
       </nav>
       <!-- 轮播图 -->
       <div class="lunbo">
           <div><img src="./imgs/1.jpg" alt=""></div>
       </div>
       <!-- 酒类 -->
        <div class="type">
           <div><img src="./imgs/nav1_1.jpg" alt=""></div>
           <div><img src="./imgs/nav1_2.jpg" alt=""></div>
           <div><img src="./imgs/nav1_3.jpg" alt=""></div>
           <div><img src="./imgs/nav1_4.jpg" alt=""></div>
           <div><img src="./imgs/nav1_5.jpg" alt=""></div>
        </div>
        <div class="type">
           <div><img src="./imgs/nav2_1.jpg" alt=""></div>
           <div><img src="./imgs/nav2_2.jpg" alt=""></div>
           <div><img src="./imgs/nav2_3.jpg" alt=""></div>
           <div><img src="./imgs/nav2_4.jpg" alt=""></div>
           <div><img src="./imgs/nav2_5.jpg" alt=""></div>
       </div>
       <!-- banner -->
       <div class="banner">
           <img src="./imgs/nav_1.jpg" alt="">
       </div>
       <!-- 秒拍 -->
       <div class="miaopai">
           <h3>
              <span>掌上秒拍</span>
              <span>距结束
                    <span>00</span>:<span>00</span>:<span>00</span>
              </span>
              <span>更多商品等你来抢！</span>
              <div><img src="./imgs/jx-sprite.png" alt=""></div>
        </h3>   
            <!-- 商品 -->
            <div>
                <!-- 商品图片 -->
                <div><img src="./imgs/shangpin_1.jpg" alt=""></div>
                <!-- 价格 -->
                <div>
                    <span class="span_1">【礼盒】 【随时随意波尔多】</span>
                    <span class="span_2">￥135.00</span><br>
                    <span class="span_3">￥139.00</span>
                </div>
            </div>

            <!-- 商品 -->
            <div>
                <!-- 商品图片 -->
                <div><img src="./imgs/shangpin_1.jpg" alt=""></div>
                <!-- 价格 -->
                <div>
                    <span class="span_1">【礼盒】 【随时随意波尔多】</span>
                    <span class="span_2">￥135.00</span><br>
                    <span class="span_3">￥139.00</span>
                </div>
            </div>

            <!-- 商品 -->
            <div>
                <!-- 商品图片 -->
                <div><img src="./imgs/shangpin_1.jpg" alt=""></div>
                <!-- 价格 -->
                <div>
                    <span class="span_1">【礼盒】 【随时随意波尔多】</span>
                    <span class="span_2">￥135.00</span><br>
                    <span class="span_3">￥139.00</span>
                </div>
            </div>
    
       </div>
       <!-- 图片div -->
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <div class="pic">
                <img src="./imgs/banner_1.jpg" alt="">
        </div>
        <!-- 爆款推荐 -->
        <div class="baokuan">爆款推荐</div>
        <div class="tuijian">
            <div>
                <div><img src="" alt=""></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <div><img src="" alt=""></div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
   </div>
</template>
  
<script>
export default {
  name: "home",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
#home{
    height: 30rem;
}
/* 顶部 */
nav{
    width: 100%;
    height: 0.4rem;
    background: #e74b48;
    position: fixed;
    top: 0;
}
/*顶部logo  */
nav>div:nth-child(1){
    width: 0.7rem;
    height: 0.23rem;
    background: red;
    float: left;
    margin: 0.06rem 0 0 0.1rem;
    overflow: hidden;
}
nav>div:nth-child(1) img{
    width: 350%;
    height:320%;
}
/* 搜索框 */
nav>div:nth-child(2){
    width: 2rem;
    height: 0.23rem;
    background: white;
    margin: 0.06rem 0 0 0.1rem;
    float: left;
    position: relative;
}
/* text */
nav>div:nth-child(2) [type = text]{
    width: 2rem;
    height: 0.20rem;
    outline: none;
    border: none;
    text-indent: 0.26rem;
    float: left;
    margin: 0.01rem 0 0 0;
    font-size: 0.12rem;
}
/* 搜索logo 父div */
nav>div:nth-child(2)>div{
    width: 0.23rem;
    height: 0.23rem;
    position: absolute;
    left: 0.02rem;
    overflow: hidden;
}
/* 搜索logo */
nav>div:nth-child(2) img{
    margin: 0.04rem 0 0 -0.63rem;
    width: 900%;
    height:300%;
}
/* 搜索按钮 */
nav>div:nth-child(3){
    font-size: 0.14rem;
    width: 0.4rem;
    height: 0.23rem;
    line-height: 0.23rem;
    color: white;
    margin: 0.06rem 0.15rem 0 0;
    float: right;
}
/* 轮播图父div */
.lunbo{
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
}
.lunbo>div{
    width: 100%;
    height: 100%;
}
.lunbo>div img{
    width: 100%;
    height: 100%;
}
/* 弹性盒子 种类 */
.type{
    width: 100%;
    height:  0.7rem;
    display: flex;
    justify-content: space-around;
}
/* 弹性盒子 子div */
.type> div{
    width: 100%;
    height: 100%;
}
.type> div img{
    width: 100%;
    height: 100%;
}
/* banner */
.banner{
    width: 100%;
    height: 2rem;
}
.banner img{
    width: 100%;
    height: 100%;
}
/* 秒拍 */
.miaopai{
    width: 100%;
    height: 2.2rem;
}
/* 秒拍div 标题 */
.miaopai h3{
    width: 100%;
    height: 0.4rem;
     font-weight: normal;
     text-align: left;
     position: relative;
}
/* h3字体设置 掌上秒拍 */
h3>span:nth-child(1){
   font-weight: bold;
   font-size: 0.14rem;
   margin: 0 0 0 0.1rem;
   color: black;
}
/* h3字体设置 距结束 */
h3>span:nth-child(2){
   font-size: 0.12rem;
   margin: 0 0 0 0.01rem;
   color: #666;
}
/* h3字体设置 倒计时 */
h3>span:nth-child(2) span{
    width:  0.2rem;
    height: 0.2rem;
    background: #666;
   font-size: 0.12rem;
   margin: 0 0 0 0.01rem;
   color: white;
   padding: 0.03rem;
   border-radius: 0.04rem;
}
/* h3字体设置 更多商品等你来抢 */
h3>span:nth-child(3){
    font-size: 0.12rem;
    margin: 0 0 0 0.3rem;
}
/* → 箭头 div*/
h3 div{
    position: absolute;
    right: 0.1rem;
    top: 0.08rem;
    width: 0.2rem;
    height: 0.2rem;
    overflow: hidden;
}
/* → 箭头 img*/
h3 div img{
   margin: 0.03rem 0 0 -0.83rem;
     width:990%;
    height:330%;
}
/* 商品 */
.miaopai>div{
    width: 1rem;
    height: 1.75rem;
    float: left;
}
/* 图片 */
.miaopai>div div:nth-child(1){
     height: 1rem;
    }
.miaopai>div div:nth-child(1) img{
    width: 100%;
    height: 100%;
}
/* 商品描述 */
.miaopai>div div:nth-child(2){
    height: 0.75rem;
    text-indent: 0;
    text-align: left;
    line-height: 0.12rem;
}
/*商品描述字体1 */
.span_1{
    font-size: 0.13rem;
    color: black;
}
/*商品描述字体2 */
.span_2{
    display: inline-block;
    font-size: 0.14rem;
    color: #e74b48;
    margin: 0.1rem 0 0 0;
}
/*商品描述字体3 */
.span_3{
    display: inline-block;
    font-size: 0.10rem;
    color: #666;
    text-decoration:line-through; 
    margin: 0.05rem 0 0 0;
}
/* 图片 */
.pic{
    width: 100%;
    height: 1rem;
}
.pic img{
    width: 100%;
    height: 100%;
}
/* 爆款推荐 */
.baokuan{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #666;
    border-top:0.04rem solid #f3f5f6; 
    border-bottom:0.01rem solid #f3f5f6; 
}
.tuijian>div{
    width: 1.78rem;
    height: 2.4rem;
    background: red;
    float: left;
    border: 1px solid black;
}
.tuijian>div div:nth-child(1){
    width: 1.78rem;
    height:1.78rem;
    background: green;
}
.tuijian>div div:nth-child(2){
    width: 1.78rem;
    height:0.62rem;
    background: white;
}
</style>