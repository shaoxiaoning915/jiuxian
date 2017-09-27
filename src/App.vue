<template>
  <div id="app">
      <router-view></router-view>
      <div id="bottom">
        <div><router-link to="/home"><img src="./imgs/footer_1.png" alt=""></router-link></div>             
        <div><router-link to="/sorts"><img src="./imgs/footer_2.png" alt=""></router-link> </div>
        <div><router-link to="/sesscions"><img src="./imgs/footer_3.png" alt=""></router-link></div>
        <div><router-link to="/market"><img src="./imgs/footer_4.png" alt=""></router-link></div>
        <div> <router-link to="/mine"><img src="./imgs/footer_5.png" alt=""></router-link> </div>
      </div>

  </div>  
   
  </div>
  
</template>

<script>

export default {
  name: 'app',
   data () {
    return {
       
    };
  },
  components: {

  }
}
</script>

<style>
html{
  font-size: 100px;

}
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.2rem;
}
#app .tabbar{
  font-size: 0.2rem;
  position: fixed;
  left:0;
  bottom:0;
  background-color:blanchedalmond;
  width:100%;
  height: 60px;
  line-height:60px;
  display:flex;
}

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
