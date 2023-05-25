import { createStore } from 'vuex'
<<<<<<< HEAD
import user from './modules/user'

=======
import createPersistedState from 'vuex-persistedstate'
>>>>>>> 9840fdb111f6ef14b116b2933df14ec1a2c0de0d
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
  //plugins: [createPersistedState()]
})

export default store