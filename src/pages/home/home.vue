<template>
    <div id="index">
        <!-- 顶部 -->
        <top></top>
        <!-- 轮播图 -->
        <banner></banner>
        <!-- 菜单 -->
        <div id="box">
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
        </div>
        <!-- 底部 -->
        <Bottom></Bottom>
   </div>
</template>
    
<script>
import Top from './pages/Top'
import Banner from './pages/Banner'

import Daohang1 from './Daohang/Daohang1'
import Daohang2 from './Daohang/Daohang2'
import Daohang3 from './Daohang/Daohang3'
import Daohang4 from './Daohang/Daohang4'
import Daohang5 from './Daohang/Daohang5'
import Daohang6 from './Daohang/Daohang6'
import Daohang7 from './Daohang/Daohang7'
import Daohang8 from './Daohang/Daohang8'
import Daohang9 from './Daohang/Daohang9'
import Daohang10 from './Daohang/Daohang10'

import Bottom from './pages/Bottom'

export default {
  name: "index",
  data () {
    return {
        pageName:"我是首页"
    };
  },
    components: {
    Top:Top,
    Banner:Banner,
    Daohang1:Daohang1,
    Daohang2:Daohang2,
    Daohang3:Daohang3,
    Daohang4:Daohang4,
    Daohang5:Daohang5,
    Daohang6:Daohang6,
    Daohang7:Daohang7,
    Daohang8:Daohang8,
    Daohang9:Daohang9,
    Daohang10:Daohang10,
    Bottom:Bottom,
    Zhuti:Zhuti,
    
  }
}
</script>
    
<style lang="css" scoped>
     *{
    margin: 0px;
    padding: 0px;
  }
  html{
    font-size: 100px;
  }
   #index{
    width: 100%;
  } 
  /*酒类导航 */
  #box{
     width: 100%;
     font-size: 0;
  }
  #box>div{
    display: flex;
    justify-content: space-around;
    height: 0.675rem;
    background: red;
    
  }
   #box> div daohang1{
     width: 100%;
     height: 100%;
   }
</style>
