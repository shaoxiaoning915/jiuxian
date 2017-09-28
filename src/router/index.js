import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'

//全局安装路由 让任何组件都可以使用路由
Vue.use(VueRouter);

//分别导入四个组件
// 导入组件
import Home from '../pages/home/Home'
import Sesscions from '../pages/sesscions/Sesscions'
import Sorts from '../pages/sorts/Sorts'
import Market from '../pages/market/Market'
import Mine from '../pages/mine/Mine'
//导入商品列表组件
import Wine from '../pages/sorts/Wine'
//导入综合列表组件
import Winelist from '../pages/sorts/Winelist'
//导入多图列表组件
import Winepic from '../pages/sorts/Winepic'
//导入详情列表组件
import WineDetail from '../pages/WineDetail'
//配置路由规则
const routes =[
        { path:'', component:Home },
        { path:'/home', component:Home },
        { path:'/sorts', component: Sorts},
        { path:'/Sesscions', component: Sesscions },
        { path:'/market', component: Market },
        { path:'/mine', component: Mine },
        { path:'/WineDetail', component: WineDetail},
        { path:'/wine/:winesortId', component: Wine}
    ]
//创建路由实例    
const router = new VueRouter({
    mode:'history',
    routes
})

//因为把路由逻辑单独提出来了，所有我们要提供一个导出路由对象功能
export default router
