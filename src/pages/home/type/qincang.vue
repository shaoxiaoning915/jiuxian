<template>
    <div id="baijiu">
        <div class="top">  <!-- 顶部 -->
           <div>    <!-- 第一个div -->
                <div>
                    <router-link to="/home"><img src="../imgs/headBack.jpg" alt=""></router-link>
                </div>
                <div>清仓狂甩 一瓶不留</div>
                <div v-on:click="change"  >
                    <img src="../imgs/headIcon.png" alt="">
                </div> 
            </div>
            <div v-if="flag">
                <router-link to="/home">
                <div class="inner">
                    
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>首页</div>
                   
                </div>
                 </router-link>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>搜索</div>
                </div>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>购物车</div>
                </div>
                 <div class="inner">
                    <div>
                        <img src="../imgs/headIcon.png" alt="">
                    </div>
                    <div>我的酒仙</div>
                </div>  
           
            </div> <!-- 第二个隐藏div -->
        </div>  <!-- 顶部 -->

        <!-- <div class="jishi">
            还剩<span>00</span>天<span>00</span>时<span>00</span>分<span>00</span>秒结束
        </div> -->
  
            <div style="height:1.05rem;margin-top:0.45rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_01.jpg' alt="">
            </div> 

            <div style="height:1.01rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_02.jpg' alt="">
            </div> 

            <div style="height:1.78rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_03.jpg' alt="">
            </div> 

       
        <div v-for="item in img1" :key="item.id">
            <div style="height:2.14rem;" class="inner1">
                <img :src="item" alt="">
            </div>
        </div>

        
            <div style="height:0.43rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_08.jpg' alt="">
            </div> 

                    
            <div style="height:1.77rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_09.jpg' alt="">
            </div> 


        <div v-for="item in img2" :key="item.id">
            <div style="height:2.14rem;" class="inner1">
                <img :src="item" alt="">
            </div>
        </div>

        <div style="height:0.42rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_14.jpg' alt="">
            </div> 

        <div style="height:1.76rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_15.jpg' alt="">
        </div> 

        <div v-for="item in img3" :key="item.id">
            <div style="height:2.15rem;" class="inner1">
                <img :src="item" alt="">
            </div>
        </div>

        <div style="height:0.74rem;" class="inner1">
                <img src='https://m.jiuxian.com/mobile/2016/clear/imgclear/end.jpg' alt="">
        </div> 
</div>
</template>
    
<script>

export default {
  name: "baijiu",
  data () {
    return {
        flag : false,
        img1:['https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_04.jpg',
             'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_05.jpg',
             'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_06.jpg',
             'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_07.jpg',
            
            ],
        img2:['https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_10.jpg',
        'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_11.jpg',
        'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_12.jpg',
        'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_13.jpg',
          
        ],
        img3:[ 'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_16.jpg',
            'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_17.jpg',
            'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_18.jpg',
            'https://m.jiuxian.com/mobile/2016/clear/imgclear/qc_19.jpg',
             ],
    };
  },
  created(){
      this.$http.get(this.url).then(res =>{
          console.log(res,this);
          this.list = res.body.promoList;
      }),err =>{
          console.log(err);
      }
  },
  methods:{
      change(){
          this.flag = ! this.flag;
      },
  }
}
</script>
    
<style lang="css" scoped>

a{
    text-decoration: none;
}
img{
    /* vertical-align: middle; */
}
/* 顶部大小 */
.top{
    width: 100%;
    height: 0.45rem;
    font-size: 0.16rem;
    position: fixed;
    top: 0rem;
}
/* 顶部的两个子div大小 */
.top>div{
    width: 100%;
    height: 100%;
}
/* 顶部第一个div */
.top>div:nth-of-type(1){
    background: #de4943;
    color: white;
} 
/* 后退按钮的div */
.top>div:nth-of-type(1)>div:nth-of-type(1){
    width: 0.3rem;
    height: 100%;
    float: left;
}
/* 白酒 */
.top>div:nth-of-type(1)>div:nth-of-type(2){
    width: 1.44rem;
    height: 100%;
    line-height: 0.42rem;
    float: left;
    background: rgba(1,1,1, 0);
    margin: 0 0 0 23%;
}
/* 分类按钮div */
.top>div:nth-of-type(1)>div:nth-of-type(3){
    width: 0.4rem;
    height: 100%;
    background: rgba(1,1,1, 0);
    float: right;
    overflow: hidden;
    position: relative;
}
/* 分类图片 */
.top>div:nth-of-type(1)>div:nth-of-type(3) img{
    position: absolute;
    width: 500%;
    height: 100%;
    left: -1.5rem;
    top: 0.04rem;
}
/* 后退按钮 */
.top>div:nth-of-type(1)>div:nth-of-type(1) img{
    height: 100%;
    margin: 0 0 0 0.05rem;
}
/* 分类二级菜单 */
.top>div:nth-of-type(2){
    background: #efefef;
    display: flex;
    justify-content: space-around;
    border-bottom:1px solid #e1e1e1; 
}
/* 二级按钮div */
.inner{
    /* background: black; */
    width: 0.48rem;
    height: 100%;
    overflow: hidden;
    position: relative;
    /* float: left; */
    /* border: none; */
}
.inner>div:nth-child(1){
    width: 100%;
    height: 0.25rem;
    margin: 0 auto;
}
/* 二级按钮图片 */
.inner>div:nth-child(1) img{
    position: absolute;
}
/* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(1) img{
    left: 0.1rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(2) img{
    left: -0.25rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(3) img{
    left: -0.61rem;
    top: 0;
}
    /* 第一个二级按钮图片相对定位 */
.top div:nth-of-type(2) div:nth-child(4) img{
    left: -1rem;
    top: 0;
}
.inner>div:nth-child(2){
        font-size: 0.12rem;
        text-align: center;
        width: 100%;
        color: #848d96;
        margin-top:0.01rem; 
}
/* 计时 */
.jishi{
    width: 100%;
    height: 0.33rem;
    background: #fbd640;
    margin: 0.44rem 0 0 0;
    color: #000078;
    font-size: 0.14rem;
    line-height: 0.33rem;
}
/* 时间方块 */
.jishi span{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background: #060577;
    color: #fbd640;
    line-height: 0.2rem;
    margin: 0 0.04rem;
}
.inner1{
    width: 100%;
}
.inner1 img{
    width: 100%;
    height: 100%;
}
</style>