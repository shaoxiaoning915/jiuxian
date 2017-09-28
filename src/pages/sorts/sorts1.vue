<template>
  <div id="sorts">
    <div id="head">
      <div class="head">
        <a href="javascript:void(0)" class="prev"></a>
        <h2 class="headTitle">选酒</h2>
        <a href="javascript:void(0)" class="navbar"></a>
      </div>
      <ul class="nav">
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
          <li class="home"><i></i><span>首页</span></li>
      </ul>
    </div>
    <div class="top">
      <div class="search">
         <input type="text" class="drink" placeholder="飞天茅台">
         <input type="button"  class="ss" value="搜索">
      </div>
    </div>
    <div class="contentFrame">
      <ul>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li> 
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>
        <li class="bj first">
          <a href="javascript:void(0)">
            <i></i>
            <span>白酒</span>
          </a>
        </li>                         
      </ul>
    </div>
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
    .contentFrame{
      width:100%;
      margin: 0 auto;
    }
    .contentFrame .list li span{
      text-align:center;
    }
    .contentFrame li i{
      width:36px;
      height: 36px;
      display: block;
      margin:10px auto;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/selectIcon0314.png) 0 0;
    }
    .contentFrame li{
      float:left;
      width:33.3%;
      height: 80px;
      display:inline-block;
      border:1px solid #f6f6f6;
      border-left:none;
    }
    .search{
      width:90%;
      margin:auto;
      display:flex;
    }
    .search input{
      border:none;
      outline:none;
      vertical-align:middle;
      margin-top:10px;
    }
    .search .drink{
      width:75%;
      height:30px;
      padding:10px;
      float:left;
      flex:1;
    }
    .search .ss{
      width:70px;
      height:30px;
      line-height:30px;
      text-align:center;
      background-color:#de4943;
      float:left;
      color:#fff;
    }
    #head{
      width:100%;
      /* position: fixed;
      left: 0;
      top:0; */
    }
    .head{
      width:100%;
      height: 0.4rem;
      background-color:#de4943;
      color:#fff;
      position:relative;
      clear:both;
      z-index:1000;
    }
    .prev{
      width:.3rem;
      height: 0.4rem;
      position: absolute;
      top:0;
      left:10px;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/headBack.jpg);
    }
    .headTitle{
      width:2.2rem;
      margin-left:6%;
      font-size:16px;
      line-height:.4rem;
      text-align:center;
      position: absolute;
      left:10%;
      font-weight:normal;
    }
    .navbar{
      width:0.3rem;
      height: 0.4rem;
      position: absolute;
      top:0;
      right: 10px;
      display:block;
      background:url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -150px 6px;
    }
    .nav{
      width:100%;
      height: 0.45rem;
      background-color:#efefef;
      border-bottom:1px solid #ccc;
      display:none;
    }
    .nav li{
      flex:1;
      width:25%;
      position:relative;
      float:left;
    }
    .nav li i{
      width:26px;
      height:20px;
      display: block;
      margin:auto;
      background:url(https://m.jiuxian.com/mjava_statics/images/headIcon.png) -3px -5px;
    }
    .nav li span{
      width:auto;
      height: 18px;
      line-height:18px;
      text-align:center;
      display:block;
    }
    .top{
      clear:both;
      width:100%;
      height: 50px;
      background-color:#e2e2e2;
    }
</style>