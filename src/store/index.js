import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        evenOrOdd(state) {
            return state.count % 2 === 0 ? 'even' : 'odd'
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        incrementOfOdd({ commit, state }) {
            if ((state.count + 1) % 2 === 0) {
                commit('increment')
            }
        },
        incrementAsync({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment')
                    resolve()
                    reject()
                }, 1000)
            })
        }
    },
    modules: {}
})