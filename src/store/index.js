import { createApp } from 'vue'
import { createStore } from 'vuex'
import user from './modules/user'

const store = createStore({
  state() {
    return {}
  },
  mutations: {},
  actions: {
    clear({ commit }) {
      commit('$_removeStorage')
    },
  },
  modules: {
    user,
  },
})

const app = createApp({})
app.use(store)

export default app
