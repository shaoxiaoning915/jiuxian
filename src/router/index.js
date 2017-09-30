// 总路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
// 全局安装路由 (让任何组件都可以使用路由)
Vue.use(VueRouter);
// 导入组件
import Home from '../pages/home/Home'
import Sesscions from '../pages/sesscions/Sesscions'
import Sorts from '../pages/sorts/Sorts'
import Market from '../pages/market/Market'
import Mine from '../pages/mine/Mine'
import Details from '../pages/sesscions/Details'
import Comments from '../pages/sesscions/Comments'

import UserLogin from '../pages/mine/UserLogin'
import PhoneLogin from '../pages/mine/PhoneLogin'

import AllEval from '../pages/sesscions/AllEval'
import GoodEval from '../pages/sesscions/GoodEval'
import MiddleEval from '../pages/sesscions/MiddleEval'
import BadEval from '../pages/sesscions/BadEval'
import HasPicEval from '../pages/sesscions/HasPicEval'
const routes =[
        { path:'', component:Home },
        { path:'/home', component:Home },
        { path:'/sorts', component: Sorts },
        { path:'/sesscions', component: Sesscions },
        { path:'/market', component: Market },
        { path:'/mine', component: Mine ,children:[
            {path:'', component:UserLogin},
            {path:'userLogin', component:UserLogin},
            {path:'phoneLogin', component:PhoneLogin}
        ]},
        { path:'/details', component: Details },
        { path:'/comments', component: Comments,children:[
            {path:'', component:AllEval},
            {path:'allEval', component:AllEval},
            {path:'goodEval', component:GoodEval},
            {path:'middleEval', component:MiddleEval},
            {path:'badEval', component:BadEval},
            {path:'hasPicEval', component:HasPicEval}
        ] },
    ]
const router = new VueRouter({
    // 路由规则
    routes
})
// 因为把路由逻辑单独提出来了，所以我们要提供一个导出路由对象功能
export default router
