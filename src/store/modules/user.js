const key = 'user'
const user = {
    state() {
        return {
            user: null
        }
    },
    getters: {
        getUser: function (state) {
            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem(key))
            }
            return state.user
        }
    },
    mutations: {
        $_setStorage (state, value) {
            state.user = value
            localStorage.setItem(key, JSON.stringify(value))
        },
        $_removeStorage (state) {
            state.user = null
            localStorage.removeItem(key)
        }
    },
    actions: {
        saveUserInfo({ commit }, data) {
            commit('$_setStorage', data)
        },
        clearUserInfo({ commit }) {
            commit('$_removeStorage');
        }
    },
    //全局变量保存在浏览器里（感觉也合理，并且方便测试:可以直接输入对应url，不会丢失全局变量）
    plugins: [createPersistedState()]
};

export default user
