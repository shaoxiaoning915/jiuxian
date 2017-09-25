<template>
  <div id="app">
    <top></top>
    <banner></banner>
    <daohang></daohang>
    <bottom></bottom> 
  </div>
</template>

<script>
import Top from './pages/Top'
import Banner from './pages/Banner'
import Daohang from './pages/Daohang'
import Bottom from './pages/Bottom'
import Zhuti from './pages/Zhuti'

export default {
  name: 'app',
  components: {
       Top:Top,
    Banner:Banner,
    Daohang:Daohang,
    Bottom:Bottom,
    Zhuti:Zhuti,
    Baijiu:Baijiu,
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  html{
    font-size: 100px;
  }
   #app{
    width: 100%;

  } 
</style>
