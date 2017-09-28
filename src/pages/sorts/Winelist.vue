<template>
    <div class="content">
        <ul>
        <!-- 综合组件 -->
          <li v-for="(item,index) in white" :key="item.id">
            <img class="prodImg" :src="item.pic">
            <div class="prodInfo">
              <div class="prodName">
                <p class="name"><a href="javascript:;">{{ item.wine_name }}</a></p>
                <p class="nameAndPro">
                  <!-- <span class="sName">
                    <i class="listIcon"></i>
                    <span></span>
                  </span> -->
                  <span class="promBox">
                    <em class="prom" style="background-color:#8888ff">满赠</em>
                    <!-- <em class="prom" style="background-color:#8888ff">多买多赠</em> -->
                  </span>
                </p>
              </div>
              <div class="price"><strong>￥{{ item.wine_price }}</strong></div>
              <div class="pro">
                <span class="listIcon"></span> <span class="good"> {{ item.wine_good }} 好评</span><span class="good">{{ item.wine_discuss }}评论</span>
              </div>
            </div>
          </li> 
      </ul>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url:'../static/winesortlist.json',
        winelist:[]
    };
  },
  created(){
    this.$http.get(this.url).then(res =>{
    //   console.log(res,this);
      this.winelist = res.body.winelist;
    },err =>{
      console.log(err);
    })
  },
  computed:{
    white(){
      // return this.$route.params.winesortId;
      for(var item of this.winelist){
        if(this.$route.params.winesortId == item.winesortId){
            return item.wine_list;
        }
      }
    }
   } 
}
</script>
    
<style lang="css" scoped>
    /* 商品列表详细信息 */
  .pro .listIcon{
    width:38px;
    height: 13px;
    display:inline-block;
    background-position:-62px -15px;
    vertical-align: middle;
  }
  .pro .good{
    color:#aaa;
    font-size:12px;
    margin-left:8px;
  }
  .price strong{
    color:#fc5a5a;
    font-weight:bold;
    font-size:15px;
    line-height:20px;
  }
  .prom{
    height: 14px;
    display:inline-block;
    font-size:10px;
    border-radius:2px;
    padding:0 2px;
    color:#fff;
    font-style:normal;
    margin-left:5px;
  }
  .prodInfo .sName i{
    width:13px;
    height: 13px;
    display:inline-block;
    background-position:-69px 1px;
  }
  .prodInfo .sName span{
    font-size:12px;
    color:#aaa;
  }
  .prodName{
    height:56px;
  }
  .prodName .name{
    line-height:22px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .prodName,.price,.pro{
   text-align:left;
  }
  .content .prodInfo{
    height:104px;
    padding:0px 0 5px 10px;
    border-bottom:1px solid #e8e8e8;
    margin-left:110px;
  }
  .prodImg{
    width:110px;
    height: 110px;
    display: block;
    float:left;
  }
  .content li{
    height:110px;
    padding-top:5px;
  }
 .listIcon{
    background:url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png);
    background-size:100px 70px;
  }
</style>