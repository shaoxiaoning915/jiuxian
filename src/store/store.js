import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = { 
    money:0, //总价钱
    totalCount:0, //商品个数
    activeItem:{}, //商品个数
    goodsList:[],//商品列表
    isLogin:false
}
let mutations = {
    ADD(state,obj){
        state.money += obj.danjia;
        state.goodsList.push(obj.duixiang);
        state.activeItem = obj.duixiang;
        state.totalCount += parseInt(obj.shuliang);
    },
    REDUCE(state,price){
        state.money -= price
    },
    ADDITEM(state,item){
    },
    DEL(state,item){
        let idx = state.goodsList.indexOf(item);
        state.goodsList.splice(idx,1);
    }
}
let getters = {

}
let actions = {
    add(context,obj){
        setTimeout(()=>{
            context.commit('ADD',obj)
        },1000)
    },
    del(context,item){
        setTimeout(() =>{
            context.commit('DEL',item)
        },1000)
    }
}
// 实例化vue仓库
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store