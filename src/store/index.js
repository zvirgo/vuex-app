import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        todos: JSON.parse(window.localStorage.getItem('todo-vuejs') || '[]')
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
        },
        addTodo(state, { text }) {
            state.todos.push({ text, done: false })
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
    modules: {},
    plugins
})