import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = { 
    totalCount:0, //商品个数
    activeItem:{}, //商品个数
    goodsList:[],//商品列表
    isLogin:false,
    activewine:{}//当前商品对象
}
let mutations = {
    ADD(state,obj){
        // state.money += obj.danjia;
        // state.goodsList.push(obj.duixiang);
        // state.activeItem = obj.duixiang;
        // state.totalCount += parseInt(obj.shuliang);
        //用来判断所添加的商品是否存在的标识
        let isExist = false
        for(let tempItem of state.goodsList){
            if(tempItem.pid == obj.pid){
                isExist = true
                tempItem.count += Number(obj.count)
                break;
            }
        }
        //如果不存在，则是新添加的商品
        if(!isExist){
            let cartwine = {
                pid:obj.pid,
                imgPath:obj.imgPath,
                jxPrice:obj.jxPrice,
                pname:obj.pname,
                count:obj.count
            }
            state.goodsList.push(cartwine)
        }
    },
    REDUCE(state,price){
        state.money -= price
    },
    ADDITEM(state,item){
    },
    DEL(state, id){
        // let idx = state.goodsList.indexOf(item);
        // state.goodsList.splice(idx,1);
        for (let index in state.goodsList){
            if(state.goodsList[index].pid == id){
                state.goodsList.splice(index, 1)
                break;
            }
        }
    },
    ADD_ACTIVE(state,item){
        state.activewine = item;
    },
    // 增加商品数量
    UP(state, id){
        for(let item of state.goodsList){
            if(item.pid == id){
                item.count++
                break;
            }
        }
    },
    //减少商品数量
    DOWN(state, id){
       for(let item of state.goodsList){
           if(item.pid == id){
               if(item.count > 1){
                   item.count--
               }
               break;
           }
       } 
    }
}
let getters = {
    //获取商品的总数量
    totalCount(state){
        let totalSum = 0;
        for(let item of state.goodsList){
            totalSum += Number(item.count)
        }
        return totalSum
    },
    // 商品总价钱
    totalMoney(state){
        let totalPrice = 0;
        for(let item of state.goodsList){
            totalPrice += Number(item.count * item.jxPrice)
        }
        return totalPrice
    }
}
let actions = {
    //添加到购物车
    add(context,obj){
        context.commit('ADD',obj)
    },
    del(context,id){
        context.commit('DEL',id)
    },
    //当前商品对象
    add_active(context,item){
        context.commit('ADD_ACTIVE',item)
    },
    //增加商品数量
    up({ commit }, id){
        commit('UP', id)
    },
    //减少商品数量
    down({ commit }, id){
        commit('DOWN', id)
    }
}
// 实例化vue仓库
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store