import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      count: 0,//测试用的
      username_glo: 'null',
      token_glo:''
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    updateUsername_glo(state,un){
        state.username_glo = un;
    },
    updateToken_glo(state,tok){
      state.token_glo = tok;
    }

  },
  //全局变量保存在浏览器里（感觉也合理，并且方便测试:可以直接输入对应url，不会丢失全局变量）
  plugins: [createPersistedState()]
})

export default store