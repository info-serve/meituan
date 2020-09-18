import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
  },
  state:{
      // position:'北京',  
      position:{},
      user:{},
      infoDetail:false,
      showVipInfo:false
  },
  mutations:{
    setPosition(state,newPosition){
      state.position = newPosition;
    },
    setLoginUser(state,val){
      state.user = val
    },
    setinfoDetail(state,val){
      state.infoDetail = val
    },
    setShowInfo(state,val){
        state.showVipInfo = val
    }
  },
  actions:{
    // eslint-disable-next-line no-unused-vars
    setPositionS({state,commit,dispatch},newVal){
      //异步请求后端获取当前位置信息 
        commit("setPosition",newVal)
    },
    setUsers({commit},val){
      commit('setLoginUser',val);
      commit('setShowInfo',true)
    },
    // 初始化同步本地存储
    syncLocal(context){
      const local = localStorage.getItem("user");
      if(local){
        //已经登录
        const user = JSON.parse(local)//拿出本地存储中的用户对象
        context.commit("setLoginUser",user);//同步到状态
      }
  }
   }
})

export default store